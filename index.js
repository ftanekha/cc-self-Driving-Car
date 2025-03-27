"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
//define class for car
class Car {
    constructor(props) {
        this.isRunning = props === null || props === void 0 ? void 0 : props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (!this.isRunning) {
            return console.info('The car is off!');
        }
        Object
            .keys(events)
            .forEach((eventKey) => {
            //before we issue any commands for our car to steer, make sure the event has a truthy value
            if (!eventKey)
                return false;
            //set rules for which way to turn for each type of event
            if (eventKey === 'ObstacleLeft') {
                this.steeringControl.turn('right');
            }
            else if (eventKey === 'ObstacleRight') {
                this.steeringControl.turn('left');
            }
        });
    }
}
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(direction);
    }
}
//instatiate a right turn
const steering = new SteeringControl();
steering.turn('right');
//give Car class access to control steering
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
