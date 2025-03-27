"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//define class for car
var Car = /** @class */ (function () {
    function Car(props) {
        this.isRunning = props === null || props === void 0 ? void 0 : props.isRunning;
    }
    Car.prototype.respond = function (events) {
        if (!this.isRunning) {
            return console.info('The car is off!');
        }
    };
    return Car;
}());
var autonomousCar = new Car({ isRunning: true });
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
var steering = new SteeringControl();
steering.turn('right');
