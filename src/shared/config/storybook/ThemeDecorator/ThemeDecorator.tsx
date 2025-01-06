import { Decorator } from '@storybook/react';
// eslint-disable-next-line pavlenko-plugin-eslint-checker/layer-imports
import ThemeProvider from '@/app/provider/ThemeProvider/ui/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
