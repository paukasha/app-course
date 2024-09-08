import type { Configuration } from 'webpack-dev-server';
import { buildOptions } from './types/config';

export function buildDevServer(options: buildOptions): Configuration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
