import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof StarRating>;

type Story = StoryObj<typeof StarRating>;
export const Primary: Story = {
    args: {},
};
