import webpack from 'webpack';
import { buildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildSvgLoaders } from './loaders/buildSvgLoaders';
import { buildBabelLoaders } from './loaders/buildBabelLoaders';

export function buildLoaders(options: buildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const svgLoader = buildSvgLoaders();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const cssLoaders = buildCssLoaders(isDev);

    const codeBabelLoader = buildBabelLoaders({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoaders({ ...options, isTsx: true });

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoaders,
    ];
}
