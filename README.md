# crayon
## binary segmentation labeler

a simple tool for doing binary segmentation labeling, ie where thing is and where thing is not

open the list of files in a local html, click with the mouse to make a polygon of where the thing is, and it'll output a numpy array of 1's where the thing is and 0's elsewhere

then you can train a model to do that for you

![alt text](https://raw.githubusercontent.com/spencerhhubert/crayon/main/assets/example_pic3.png)
![alt text](https://raw.githubusercontent.com/spencerhhubert/crayon/main/assets/example_pic1.png)
![alt text](https://raw.githubusercontent.com/spencerhhubert/crayon/main/assets/example_pic4.png)

## usage

this is pretty janky so hang in there. crayon can be started with
```
python crayon.py -d data
```
where `data` is the directory of your data. `data` needs to contain a `source` folder like `data/source`, which is the actual set of images you wish to label.

a `data/labels` and `data/cords` will be added by the program. `data/labels` will contain `.npy` files, which are the actual numpy arrays of 0's and 1's acting as the mask of the object in the picture.

to begin labeling after you've run the file like above, open `crayon.html` in the browser. click `begin` and go to work.

when you click `next`, it will prompt to save the cords you just took. save these to `data/cords`. this is important to do each for each picture.

if you get a download permission error, it's possible the `cords` and `labels` folder were created by root. change with `chown {your usernmame} cords`.
