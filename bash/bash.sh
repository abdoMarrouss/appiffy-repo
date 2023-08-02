#!/bin/bash
# delete all angular build files in root directory 
printf "\n** removing all build files **\n"
rm -f *.* 

sleep 1
sleep 1

# mget new build files 
printf "\n** files copied successfully **\n"
cp appiffy-front/dist/appiffy-front/* ./
