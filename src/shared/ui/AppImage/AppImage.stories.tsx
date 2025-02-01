import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AppImage>;

type Story = StoryObj<typeof AppImage>;
export const Primary: Story = {
    args: {},
};
