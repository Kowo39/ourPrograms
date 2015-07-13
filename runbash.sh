#!/bin/bash

COUNTER=0;

while [ $COUNTER -lt 100 ]; do

STRING="HELLO WORLD"
echo $STRING
sudo hciconfig hci0 reset
sudo node scanPok.js

done
