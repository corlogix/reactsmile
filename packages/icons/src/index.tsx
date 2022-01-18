
import React from "react";

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
] as const;

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
    name: typeof icons[number];
    outline?: boolean;
}

const classNames = (...classNames: (string | Record<string, boolean>)[]): string =>
    classNames
        .filter(x => {
            if(typeof x === "object") {
                return x[0];
            }
            return !x;
        }).map(x => {
            if(typeof x === "object") {
                return Object.keys(x)[0];
            }
            return x;
        })
        .join(" ");

export function Icon({ name, outline = false, className, ...props }: IconProps) {
    const classes = classNames(
        'rs-icon',
        { [`rs-${name}`]: !outline },
        { [`rs-${name}-o`]: outline },
        className
    );
    return <span className={classes} {...props} />;
}
export default Icon;
