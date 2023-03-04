import numpy as np
import cv2
import os

base_path = "data"

def view_work():
    for file in os.listdir(base_path + "/labels"):
        if file.endswith(".npy"):
            mask = np.load(base_path + "/labels/" + file)
            mask = mask.astype(np.uint8)
            img = cv2.imread(base_path + "/source/" + file[:-4] + ".jpg")
            cv2.imshow("mask", mask)
            cv2.imshow("img", img)
            print("reading pic ", file)
            cv2.waitKey(0)

if __name__ == "__main__":
    view_work()
