import re

def scan_pdf_for_images(pdf_path):
    with open(pdf_path, 'rb') as f:
        data = f.read()
    
    print(f"PDF size: {len(data)} bytes")
    
    # Search for image objects
    image_objs = re.findall(b'/Subtype\s*/Image', data)
    print(f"Found {len(image_objs)} image reference tags in the raw PDF data.")
    
    # Let's find matches for /Type /XObject and see if there are images
    # We can search for the byte signature of common image formats: PNG or JPEG
    # JPEG starts with FF D8 FF and ends with FF D9
    # PNG starts with 89 50 4E 47 0D 0A 1A 0A
    
    png_signatures = list(re.finditer(b'\x89PNG\r\n\x1a\n', data))
    jpg_signatures = list(re.finditer(b'\xff\xd8\xff', data))
    
    print(f"Found {len(png_signatures)} PNG signatures.")
    print(f"Found {len(jpg_signatures)} JPEG signatures.")

if __name__ == "__main__":
    scan_pdf_for_images(r"D:\warm-earth-studio\Bhushan Poojary.pdf")
