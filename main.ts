input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("para")
    soundExpression.sad.play()
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("avanza")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "avanza") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 90)
    }
    if (receivedString == "atras") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 90)
    }
    if (receivedString == "para") {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("atras")
})
radio.setGroup(1)
