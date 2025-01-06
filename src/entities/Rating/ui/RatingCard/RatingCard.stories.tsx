import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof RatingCard>;

type Story = StoryObj<typeof RatingCard>;
export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
