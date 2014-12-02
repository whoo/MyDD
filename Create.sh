#!/bin/bash

if [ !  -e "plugins" ]
then
webworks plugin add org.apache.cordova.vibration
webworks plugin add com.blackberry.app 
webworks plugin add org.apache.cordova.geolocation
fi

if [ ! -e "platforms" ]
then
webworks platform add blackberry10
fi
