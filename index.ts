import { getObstacleEvents } from './computer-vision'

interface Events {
    [event: string]: boolean
}
interface AutonomousCar {
    isRunning?: boolean
    respond: (events: Events) => void
}

interface AutonomousCarProps{
    isRunning?: boolean
}

//define class for car
class Car implements AutonomousCar {
    isRunning?: boolean

    constructor(props: AutonomousCarProps){
        this.isRunning = props?.isRunning
    }

    respond(events: Events){
        if(!this.isRunning){
            return console.info('The car is off!')
        }
    }
}

const autonomousCar = new Car({isRunning: true})

// console.log(autonomousCar.isRunning)
// console.log(autonomousCar.respond(getObstacleEvents()))

interface Control {
    execute: (command: string) => void
}
