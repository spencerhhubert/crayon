import argparse
import os
import time
import numpy as np
import cv2

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-d', '--data_path', required=True)
    args = parser.parse_args()
    data_path = args.data_path

    if not os.path.exists(os.path.join(data_path, 'labels')):
        os.makedirs(os.path.join(data_path, 'labels'))
    if not os.path.exists(os.path.join(data_path, 'cords')):
        os.makedirs(os.path.join(data_path, 'cords'))
    if not os.path.exists(os.path.join(data_path, 'source')):
        os.makedirs(os.path.join(data_path, 'source'))

    all_data_pathes = [f"{data_path}/source/{d}" for d in os.listdir(os.path.join(data_path, 'source'))]
    all_data_pathes.sort()
    js_line = "let data_paths = ["
    for p in all_data_pathes:
        js_line += f"\"{p}\", "
    js_line += "]\n"
    
    with open("crayon.js") as f:
        lines = f.readlines();
    lines[0] = js_line;
    with open("crayon.js", 'w') as f:
        f.writelines(lines);
    
    print(f"Go to {os.getcwd()}/crayon.html and begin")

    while True:
        #go through data_path/cords and turn them into numpy arrays in data_path/labels
        for raw in os.listdir(os.path.join(data_path, 'cords')):
            with open(os.path.join(data_path, 'cords', raw)) as f:
                cords = f.readlines()
                cords = [c.split() for c in cords]
                cords = [[int(c[0]), int(c[1])] for c in cords]
                cords = np.array(cords)

                img_name = os.path.basename(chopOffEnd(raw, 4))
                img_path = os.path.join(data_path, 'source', img_name)
                img = np.array(Image.open(img_path))
                mask = np.zeros(img.shape[:2], dtype=np.int32)
                cv2.fillPoly(mask, [cords], (255))
                print(img)
                exit()
                np.save(os.path.join(data_path, 'labels', raw+".npy"), cords)
        time.sleep(10)

