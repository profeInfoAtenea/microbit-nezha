function girarDerecha () {
    basic.showArrow(ArrowNames.East)
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M4, 100)
}
function girarIzquierda () {
    basic.showArrow(ArrowNames.West)
    neZha.setMotorSpeed(neZha.MotorList.M1, 100)
    neZha.setMotorSpeed(neZha.MotorList.M4, 0)
}
function avanzar () {
    basic.showArrow(ArrowNames.North)
    neZha.setMotorSpeed(neZha.MotorList.M1, 100)
    neZha.setMotorSpeed(neZha.MotorList.M4, -100)
}
function retroceder () {
    basic.showArrow(ArrowNames.South)
    neZha.setMotorSpeed(neZha.MotorList.M1, -100)
    neZha.setMotorSpeed(neZha.MotorList.M4, 100)
}
basic.forever(function () {
    if (10 >= PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)) {
        retroceder()
        girarIzquierda()
    } else {
        avanzar()
    }
})
