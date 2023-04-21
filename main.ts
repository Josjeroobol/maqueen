basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    basic.pause(200)
})
