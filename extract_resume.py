import pypdf
import os

pdf_path = r"D:\warm-earth-studio\Bhushan Poojary.pdf"
output_path = r"D:\warm-earth-studio\resume_text.txt"

print(f"Opening PDF: {pdf_path}")
reader = pypdf.PdfReader(pdf_path)
text_content = []

for i, page in enumerate(reader.pages):
    print(f"Reading page {i+1}...")
    text = page.extract_text()
    text_content.append(f"--- Page {i+1} ---\n{text}")

full_text = "\n\n".join(text_content)
with open(output_path, "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"Successfully wrote text to {output_path}")
