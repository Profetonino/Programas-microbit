radio.onReceivedString(function (receivedString) {
    if (receivedString == "avanza") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 123)
    }
    if (receivedString == "atras") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 123)
    }
})
radio.setGroup(1)
