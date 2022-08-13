basic.showString("Wifi")
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("Redmi K30", "12345678")
ESP8266_IoT.wait(5000)
if (ESP8266_IoT.wifiState(true)) {
    basic.showString("Wifi Connected!")
    ESP8266_IoT.adafruit_setting("trungtq90", "aio_yWFl661i31Rg8k4EHCHGR88bpKNr")
} else {
	
}
basic.forever(function () {
	
})
