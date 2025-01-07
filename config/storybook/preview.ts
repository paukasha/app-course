import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { withRouter } from 'storybook-addon-remix-react-router';
import { withThemeByClassName } from '@storybook/addon-themes';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SuspenseDecorator } from '../../src/shared/config/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    decorators: [
        ThemeDecorator(Theme.LIGHT),
        withRouter(),
        SuspenseDecorator,
        withThemeByClassName({
            themes: {
                light: 'app_light_theme',
                dark: 'app_dark_theme',
                orange: 'app_orange_theme',
            },
            defaultTheme: 'app_light_theme',
        }),
    ],
};

export default preview;
