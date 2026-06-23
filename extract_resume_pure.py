import re
import zlib

def extract_pdf_text(pdf_path, output_path):
    print(f"Reading {pdf_path}...")
    with open(pdf_path, 'rb') as f:
        data = f.read()
    
    # We find all stream contents. In PDF, streams are wrapped by 'stream' and 'endstream'
    # We use a pattern that searches for stream data.
    # Note: we need to handle variations in newlines (\r\n or \n)
    stream_objs = []
    
    # Let's find the start of each stream and end of each stream
    start_indices = [m.start() + len(m.group(0)) for m in re.finditer(b'stream\r?\n', data)]
    end_indices = [m.start() for m in re.finditer(b'\r?\nendstream', data)]
    
    # Match pairs of start and end
    # We can just iterate through start indices and find the first end index that is after it
    stream_data_list = []
    for start in start_indices:
        # Find the first end index that is larger than start
        end = next((e for e in end_indices if e > start), None)
        if end:
            stream_data_list.append(data[start:end])
            
    print(f"Found {len(stream_data_list)} raw streams in PDF.")
    
    text_pieces = []
    
    for i, stream_data in enumerate(stream_data_list):
        decompressed = None
        # Try to decompress
        try:
            decompressed = zlib.decompress(stream_data)
        except Exception:
            # Let's try trimming extra carriage returns or newlines from boundaries
            # Sometimes there are trailing characters in the stream block
            for offset_start in range(0, 15):
                for offset_end in range(0, 15):
                    try:
                        decompressed = zlib.decompress(stream_data[offset_start:len(stream_data)-offset_end])
                        break
                    except Exception:
                        pass
                if decompressed:
                    break
        
        if decompressed:
            try:
                dec_str = decompressed.decode('utf-8', errors='ignore')
            except Exception:
                dec_str = decompressed.decode('latin-1', errors='ignore')
            
            # Extract parenthesized strings, e.g. (Hello World)
            # In PDF content streams, text is placed inside parentheses (...)
            # Let's extract them in order.
            matches = []
            
            # Simple state machine to extract text inside parentheses
            in_paren = False
            escaped = False
            current = []
            
            for char in dec_str:
                if in_paren:
                    if escaped:
                        current.append(char)
                        escaped = False
                    elif char == '\\':
                        escaped = True
                    elif char == ')':
                        in_paren = False
                        matches.append("".join(current))
                        current = []
                    else:
                        current.append(char)
                else:
                    if char == '(':
                        in_paren = True
            
            if matches:
                # Clean up empty strings or single whitespace
                cleaned_matches = [m.strip() for m in matches if m.strip()]
                if cleaned_matches:
                    text_pieces.append(" ".join(cleaned_matches))
                    
    # Let's join everything and save it
    full_text = "\n\n".join(text_pieces)
    
    # Sometimes text extraction yields overlapping or duplicate chunks, but it's enough to reconstruct
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(full_text)
        
    print(f"Successfully extracted text to {output_path}")

if __name__ == "__main__":
    extract_pdf_text(
        r"D:\warm-earth-studio\Bhushan Poojary.pdf", 
        r"D:\warm-earth-studio\resume_text.txt"
    )
