"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_vision_1 = require("./computer-vision");
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
var autonomousCar = new Car({ isRunning: false });
console.log(autonomousCar.isRunning);
console.log(autonomousCar.respond((0, computer_vision_1.getObstacleEvents)()));
