import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CountrySelect } from './CountrySelect';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CountrySelect>;

type Story = StoryObj<typeof CountrySelect>;
export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
