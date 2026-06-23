import os

def find_file(filename, search_paths):
    found = []
    for path in search_paths:
        if not os.path.exists(path):
            continue
        print(f"Searching in {path}...")
        for root, dirs, files in os.walk(path):
            if filename in files:
                full_path = os.path.join(root, filename)
                print(f"Found: {full_path}")
                found.append(full_path)
    return found

if __name__ == "__main__":
    user_profile = os.environ.get("USERPROFILE", "C:\\Users\\User")
    paths_to_search = [
        "C:\\Program Files\\nodejs",
        "C:\\Program Files (x86)\\nodejs",
        os.path.join(user_profile, "AppData\\Roaming\\npm"),
        os.path.join(user_profile, "AppData\\Local\\Programs\\bun"),
        os.path.join(user_profile, "AppData\\Local\\fnm"),
        os.path.join(user_profile, "AppData\\Roaming\\nvm"),
    ]
    
    print("Searching for node.exe...")
    find_file("node.exe", paths_to_search)
    
    print("\nSearching for npm.cmd...")
    find_file("npm.cmd", paths_to_search)
    
    print("\nSearching for bun.exe...")
    find_file("bun.exe", paths_to_search)
