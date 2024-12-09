import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'shared/ArticlesPageFiters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticlesPageFilters>;

type Story = StoryObj<typeof ArticlesPageFilters>;
export const Primary: Story = {
    args: {},
};
