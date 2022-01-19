"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const react_1 = require("react");
const icons = [
    'alarm',
    'bag',
    'bank',
    'box',
    'calendar',
    'card',
    'chart-alt',
    'chart',
    'clock',
    'filter',
    'flask-alt',
    'flask',
    'home',
    'medkit',
    'moon',
    'palette',
    'pulse',
    'shopping-bag',
    'shopping-basket',
    'shopping-cart',
    'sun',
    'timer',
    'umbrella',
    'wallet'
];
const classNames = (...classNames) => classNames
    .filter(x => {
    if (typeof x === "object") {
        const key = Object.keys(x)[0];
        console.log({ x }, { key, test: x[key] });
        return x[key];
    }
    return x;
}).map(x => {
    if (typeof x === "object") {
        return Object.keys(x)[0];
    }
    return x;
})
    .join(" ");
function Icon({ name, outline = false, className, ...props }) {
    const classes = classNames('rs-icon', { [`rs-${name}`]: !outline }, { [`rs-${name}-o`]: outline }, className);
    console.log({ classes });
    return <span className={classes} {...props}/>;
}
exports.Icon = Icon;
exports.default = Icon;
