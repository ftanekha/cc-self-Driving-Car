"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_vision_1 = require("./computer-vision");
//define class for car
var Car = /** @class */ (function () {
    function Car(props) {
        this.isRunning = props === null || props === void 0 ? void 0 : props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    Car.prototype.respond = function (events) {
        var _this = this;
        //handle the case where `getObstacleEvents()` might return an empty object
        if (Object.keys(events).length === 0)
            return;
        //
        if (!this.isRunning) {
            return console.info('The car is off!');
        }
        Object
            .keys(events)
            .forEach(function (obstacleType) {
            //before we issue any commands for our car to steer, make sure the event has a truthy value
            if (!events[obstacleType])
                return false;
            //implement error handling for the `steeringControl` to ensure it is properly initialized before use
            if (_this.steeringControl) {
                //set rules for which way to turn for each type of event
                if (obstacleType === 'ObstacleLeft') {
                    _this.steeringControl.turn('right');
                }
                else if (obstacleType === 'ObstacleRight') {
                    _this.steeringControl.turn('left');
                }
            }
        });
    };
    return Car;
}());
var SteeringControl = /** @class */ (function () {
    function SteeringControl() {
    }
    SteeringControl.prototype.execute = function (command) {
        console.log("Executing: ".concat(command));
    };
    SteeringControl.prototype.turn = function (direction) {
        this.execute(direction);
    };
    return SteeringControl;
}());
//instatiate a right turn
var steering = new SteeringControl();
steering.turn('right');
//give Car class access to control steering
var autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
