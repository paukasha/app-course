import { Theme } from 'app/provider/ThemeProvider';
import { Decorator } from '@storybook/react';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
