import { Decorator } from '@storybook/react';
import { Theme } from '@/app/provider/ThemeProvider';
import ThemeProvider from '@/app/provider/ThemeProvider/ui/ThemeProvider';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
