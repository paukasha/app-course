import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { withRouter } from 'storybook-addon-remix-react-router';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/provider/ThemeProvider';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        withRouter(),
        // TranslationDecorator(),
    ],
};

export default preview;
