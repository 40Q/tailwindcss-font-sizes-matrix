import { PluginCreator } from 'tailwindcss/types/config';

export interface Config {
  [key: string]: {
    [key: string]: string | { [key: string]: string };
  };
};

export default function fontSizesMatrix(config: Config): PluginCreator {
  return function ({ addUtilities }) {
    const newUtilities = Object.entries(config).reduce(
      (utilities, [classKey, breakpointsSizes]) => {
        const newSize = Object.entries(breakpointsSizes).reduce(
          (size, [breakpoint, value]) => {
            const properties =
              typeof value === "string" ? { fontSize: value } : value;

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
          },
          {},
        );

        return {
          ...utilities,
          ...{ [`.text-${classKey}`]: newSize },
        };
      },
      {},
    );

    addUtilities(newUtilities);
  };
}
