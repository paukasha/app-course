import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

export default {
    title: 'shared/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof RatingCard>;

type Story = StoryObj<typeof RatingCard>;
export const Primary: Story = {
    args: {},
};
