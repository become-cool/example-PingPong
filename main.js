
const model = require('./model.js')
model.setup()
model.runCards()

let active = 1
let pos = 1
let directory = -1
let boom = false
global.normalSpeed = 0.15
global.boomSpeed = 0.6

be.part.led1.setValue(20)
be.part.led2.setValue(0)
be.part.led3.setValue(0)
be.part.led4.setValue(0)
be.part.led5.setValue(0)
be.part.led6.setValue(0)
be.part.led7.setValue(0)
be.part.led8.setValue(0)

setInterval(()=>{
    pos+= directory
    if(pos<=1) {
        pos = 1
    }
    if(pos>=8) {
        pos = 8
    }

    let newActive = Math.floor(pos)
    if(newActive!=active) {
        be.part["led"+active].setValue(0)
        if( (newActive==1 || newActive==8) && boom ) {
            be.part["led"+newActive].setValue(100)
        }
        else
            be.part["led"+newActive].setValue(newActive==3? 100: 20)
        active = newActive
    }

}, 20)


let pressTime1 = 0
be.part.switch1.on("on",async ()=>{
    pressTime1 = Date.now()
})
be.part.switch1.on("off",async ()=>{
    if(pressTime1>0 && Date.now()-pressTime1>1000) {
        console.log("boom")
        boom = true
        directory = boomSpeed
    }
    else {
        directory = normalSpeed
        boom = false
    }
    pressTime1 = 0
})

let pressTime2 = 0
be.part.switch2.on("on",async ()=>{
    pressTime2 = Date.now()
})
be.part.switch2.on("off",async ()=>{
    if(pressTime2>0 && Date.now()-pressTime2>1000) {
        console.log("boom")
        boom = true
        directory = -boomSpeed
    }
    else {
        directory = -normalSpeed
        boom = false
    }
    pressTime2 = 0
})



