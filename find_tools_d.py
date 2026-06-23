import os

def find_file_on_d(filename):
    print(f"Searching for {filename} on D:\\...")
    # List top level directories on D:\
    try:
        top_dirs = os.listdir("D:\\")
    except Exception as e:
        print(f"Failed to list D:\\: {e}")
        return []
    
    found = []
    # Avoid walking massive directories, only check standard folders
    for d in top_dirs:
        # Skip system or standard workspace folders that wouldn't have it
        if d.startswith("$") or d.lower() in ["system volume information", "recycle.bin"]:
            continue
        path = os.path.join("D:\\", d)
        if not os.path.isdir(path):
            if d.lower() == filename.lower():
                found.append(path)
            continue
            
        # Search up to depth 3 in other folders on D:\
        print(f"Checking D:\\{d}...")
        for root, dirs, files in os.walk(path):
            # Restrict depth to 3
            depth = root[len(path):].count(os.path.sep)
            if depth > 3:
                # empty dirs to stop walking deeper
                dirs[:] = []
                continue
            if filename in files:
                full_path = os.path.join(root, filename)
                print(f"Found: {full_path}")
                found.append(full_path)
    return found

if __name__ == "__main__":
    node_paths = find_file_on_d("node.exe")
    npm_paths = find_file_on_d("npm.cmd")
    bun_paths = find_file_on_d("bun.exe")
    print(f"\nDone. Node: {node_paths}, NPM: {npm_paths}, Bun: {bun_paths}")
