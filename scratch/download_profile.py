import urllib.request

def download_github_avatar():
    url = "https://github.com/rockstar-2006.png"
    target = r"D:\warm-earth-studio\public\profile.png"
    try:
        print(f"Downloading {url} to {target}...")
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(target, 'wb') as f:
                f.write(response.read())
        print("Download successful!")
    except Exception as e:
        print(f"Error downloading: {e}")

if __name__ == "__main__":
    download_github_avatar()
