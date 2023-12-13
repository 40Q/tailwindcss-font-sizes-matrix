import { PluginCreator } from 'tailwindcss/types/config';
export interface Config {
    [key: string]: {
        [key: string]: string | {
            [key: string]: string;
        };
    };
}
export declare function fontSizesMatrix(config: Config): PluginCreator;
