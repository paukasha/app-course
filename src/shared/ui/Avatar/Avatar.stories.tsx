import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/cat.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;
export const Primary: Story = {
    args: { src: AvatarImg },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeSmall: Story = {
    args: {
        src: AvatarImg,
        size: 50,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
