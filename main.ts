let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing > 23 && bearing < 68) {
        basic.showString("NE")
    } else if (bearing >= 68 && bearing < 113) {
        basic.showString("E")
    } else if (bearing >= 113 && bearing < 158) {
        basic.showString("SE")
    } else if (bearing >= 158 && bearing < 203) {
        basic.showString("S")
    } else if (bearing >= 203 && bearing < 248) {
        basic.showString("SW")
    } else if (bearing >= 248 && bearing < 293) {
        basic.showString("W")
    } else if (bearing >= 293 && bearing < 338) {
        basic.showString("NW")
    } else {
        music.ringTone(262)
        basic.showString("N")
    }
})
