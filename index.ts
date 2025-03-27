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
    steeringControl: Steering
}

//define class for car
class Car implements AutonomousCar {
    isRunning?: boolean
    steeringControl: Steering

    constructor(props: AutonomousCarProps){
        this.isRunning = props?.isRunning
        this.steeringControl = props.steeringControl
    }

    respond(events: Events){
        if(!this.isRunning){
            return console.info('The car is off!')
        }
        Object
        .keys(events)
        .forEach( 
            (eventKey: string) => {
                //before we issue any commands for our car to steer, make sure the event has a truthy value
                if(!eventKey) return false
                //set rules for which way to turn for each type of event
                if(eventKey === 'ObstacleLeft'){
                    this.steeringControl.turn('right')
                }else if(eventKey === 'ObstacleRight'){
                    this.steeringControl.turn('left')
                }
            }
        )
    }
}

//declare a main control interface for responding to events
interface Control {
    execute: (command: string) => void
}
//declare an interface for the steering/turning response
interface Steering extends Control {
    turn: (direction: string) => void
}

class SteeringControl implements Steering {
    execute(command: string){
        console.log(`Executing: ${command}`)
    }
    turn(direction: string){
        this.execute(direction)
    }
}
//instatiate a right turn
const steering = new SteeringControl()
steering.turn('right')

//give Car class access to control steering
const autonomousCar = new Car({isRunning: true, steeringControl: steering})

autonomousCar.respond(getObstacleEvents())
autonomousCar.respond(getObstacleEvents())
autonomousCar.respond(getObstacleEvents())