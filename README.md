# crayon

a tool for quickly generating a list of cordinates in an image representing the vertices of a polygon outlining the lego piece. this was used to train an image segmentation model

you can test it by clicking 'begin' at [crayon.html](https://spencerhhubert.github.io/crayon/crayon.html)

this is for the [nexus project](https://github.com/spencerhhubert/nexus).

once the images have been prepared in the data/images/ folder, there is some python used to queue them up into a javascript file so that html and javascript can be used for the gui end

the user clicks a series of points in the image, creating an outline of the desired segmentation while javascript saves those cordinates. the user than saves a text file of those cordinates and it goes to the next image

![alt text](https://raw.githubusercontent.com/spencerhhubert/crayon/main/example_pic3.png)

those points and images were later loaded into a pytorch model to do cropped automatically:

![alt text](https://raw.githubusercontent.com/spencerhhubert/crayon/main/example_pic1.png)
![alt text](https://raw.githubusercontent.com/spencerhhubert/crayon/main/example_pic2.png)
![alt text](https://raw.githubusercontent.com/spencerhhubert/crayon/main/example_pic4.png)
