from PIL import Image
import numpy as np
# load the image
image = Image.open('data/masked/part-1-14.jpg_masked.jpg')
# convert image to numpy array
np.set_printoptions(threshold=np.inf)
data = np.array(image)
data[data > 1] = 1;
print(data[59])
print(np.unique(data))
print(np.where(data == 2))
