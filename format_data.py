import numpy as np
import cv2
import os

data_p = "data/";
images_p = data_p + "images/";
labels_p = data_p + "labels/";
masked_p = data_p + "masked/";

if not os.path.exists(images_p):
	os.makedirs(images_p);
if not os.path.exists(labels_p):
	os.makedirs(labels_p);
if not os.path.exists(masked_p):
	os.makedirs(masked_p);

images, labels = sorted(os.listdir(images_p)), sorted(os.listdir(labels_p));

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
	print(output);
	return output;

def partNum(filename):
	split = filename.split('-');
	return split[1];

for label in labels:
	img_name = chopOffEnd(label, 4);
	img_p = images_p + partNum(img_name) + '/' + img_name;
	label_p = labels_p + label;
	img = cv2.imread(img_p);
	height, width = img.shape[0], img.shape[1];
	zeroed = np.zeros([height, width], dtype=np.uint8);
	verts = makePoints(label_p);
	# this will create an image where every pixel is 0 except the ones where an object exists and the value is 1.
	# with a future version of crayon multiple labels should be able to be added at once and the value of the respective pixel corresponds to it's label. like brick 1 is 1, brick 2 is 2.
	if(len(verts[0]) > 0):
		cv2.fillPoly(zeroed, verts, 1);
		zeroed[zeroed > 1] = 1;
	cv2.imwrite(masked_p + img_name + "_masked.jpg", zeroed);
	#cv2.imshow("cropped", zeroed);
	#cv2.waitKey(0);
	print(label + " masked");
