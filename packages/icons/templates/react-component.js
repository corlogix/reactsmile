module.exports = (prefix = "rs", icons = []) => `
import React from "react";

export const ReactSmileIconsArray = [
    ${icons.map(icon => `'${icon.replace(".svg", "")}'`).join(",\n\t")}
];

export const ReactSmileIcons = [
    ${icons.map(icon => `'${icon.replace(".svg", "")}'`).filter(x => !x.endsWith("-o'")).join(",\n\t")}
] as const;

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
    name: typeof ReactSmileIcons[number];
    outline?: boolean;
}

const classNames = (...classNames: (string | Record<string, boolean>)[]): string =>
    classNames
        .filter(x => {
            if(typeof x === "object") {
                const key = Object.keys(x)[0];
                return x[key];
            }
            return x;
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
        { [\`rs-\${name}\`]: !outline },
        { [\`rs-\${name}-o\`]: outline },
        className
    );
    return <span className={classes} {...props} />;
}
export default Icon;
`