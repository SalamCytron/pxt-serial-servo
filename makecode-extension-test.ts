// tests go here; this will not be compiled when this package is used as an extension.
busServo.init(SerialPin.P0)
busServo.moveServo(0, 1500, 1000)
basic.pause(2000)
busServo.moveServo(0, 2000, 1000)
basic.pause(2000)
busServo.moveServo(0, 1000, 1000)
