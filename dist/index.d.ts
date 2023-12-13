import { PluginCreator } from 'tailwindcss/types/config';
export interface Config {
    [key: string]: {
        [key: string]: string | {
            [key: string]: string;
        };
    };
}
export default function fontSizesMatrix(config: Config): PluginCreator;
