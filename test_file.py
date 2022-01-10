from PIL import Image
import numpy as np
# load the image
image = Image.open('data/masked/part-1-10.jpg_masked.jpg')
# convert image to numpy array
np.set_printoptions(threshold=np.inf)
data = np.asarray(image)
print(data)
