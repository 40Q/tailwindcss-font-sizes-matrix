"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontSizesMatrix = void 0;
;
function fontSizesMatrix(config) {
    return function ({ addUtilities }) {
        const newUtilities = Object.entries(config).reduce((utilities, [classKey, breakpointsSizes]) => {
            const newSize = Object.entries(breakpointsSizes).reduce((size, [breakpoint, value]) => {
                const properties = typeof value === "string" ? { fontSize: value } : value;
                if (breakpoint === "default") {
                    return {
                        ...size,
                        ...properties,
                    };
                }
                return {
                    ...size,
                    [`@screen ${breakpoint}`]: properties,
                };
            }, {});
            return {
                ...utilities,
                ...{ [`.text-${classKey}`]: newSize },
            };
        }, {});
        addUtilities(newUtilities);
    };
}
exports.fontSizesMatrix = fontSizesMatrix;
