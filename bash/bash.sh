#!/bin/bash
# delete all angular build files in root directory 
printf "\n** removing all build files **\n"
rm -f *.* 
rm -rf assets/
sleep 1
sleep 1

# get new build files 
printf "\n** getting build files **\n"
cp appiffy-front/dist/appiffy-front/* ./
