"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertMoney = exports.calcTime = void 0;

// Convert time to hours and minutes
var calcTime = function calcTime(time) {
  var hours = Math.floor(time / 60);
  var mins = time % 60;
  return "".concat(hours, "h ").concat(mins, "m");
}; // Convert a number to money formatting


exports.calcTime = calcTime;

var convertMoney = function convertMoney(money) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};

exports.convertMoney = convertMoney;