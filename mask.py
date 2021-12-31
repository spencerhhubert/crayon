import numpy as np
import cv2
import os

data_p = "data/";
images_p = data_p + "images/";
labels_p = data_p + "labels/";
masked_p = data_p + "masked/";

images, labels = os.listdir(images_p), os.listdir(labels_p);

#should iterate through labels and find their respective images

def chopOffEnd(string, n):
	return string[:len(string) - n];

def makePoints(path):
	# returns numpy array of arrays of length 2 representing vertices of a polygon
	# it expects the parameter to be X1 Y1\nX2 Y2\n...
	file_ = open(path, 'r');
	lines = file_.readlines();
	num_verts = len(lines);
	output = np.zeros((num_verts, 2), dtype=int);
	for i in range(num_verts):
		cord = list(map(int, lines[i].split()));
		output[i] = cord;
	output = np.int32([output]);
	return output;

for label in labels:
	img_name = chopOffEnd(label, 4);
	img_p = images_p + img_name;
	img = cv2.imread(img_p);
	verts = makePoints(labels_p + label);
	height, width = img.shape[0], img.shape[1];
	mask = np.zeros((height, width), dtype=np.uint8);
	points = verts;
	cv2.fillPoly(mask, verts, (255));

	res = cv2.bitwise_and(img, img, mask=mask);

	rect = cv2.boundingRect(points); # returns (x,y,w,h) of the rect
	cropped = res[rect[1]: rect[1] + rect[3], rect[0]: rect[0] + rect[2]]

	cv2.imshow("cropped" , cropped )
	cv2.waitKey(0)
	cv2.imshow("same size" , res)
	cv2.waitKey(0)
