Webworks sample project
====
- move html5 into blackberry app throught Cordova (http://cordova.apache.org/)
- Download BB10 WebWorks SDK 2.2.0.15 (http://developer.blackberry.com/html5/downloads/)
- before run you need to install plugins.


##########
webworks plugin add org.apache.cordova.vibration
webworks plugin add com.blackberry.app
webworks plugin add org.apache.cordova.geolocation

webworks platform add blackberry10


### 
webworks build
or via webworks-ui

