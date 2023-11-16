#!/bin/bash
if [ $# -eq 0 ]; then
    >2 echo "No arguments provided"
    exit 1
fi
echo $1
echo $2
echo $3
