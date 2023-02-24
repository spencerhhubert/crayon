#! /bin/bash
IMAGE="crayon"
CONTAINER="crayon"

sudo docker stop $CONTAINER
sudo docker rm $CONTAINER

sudo docker run -d \
    -v /home/spencer/code/crayon:/crayon/ \
    --name $CONTAINER \
    -it $IMAGE
