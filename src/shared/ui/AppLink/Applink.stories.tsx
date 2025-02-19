import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Applink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
    args: {
        to: '/',
    },
} as Meta<typeof AppLink>;

// const Template: StoryObj<typeof AppLink> = (args) => <AppLink {...args} />;

type Story = StoryObj<typeof AppLink>;
export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary:Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },

};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark :Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],

};
