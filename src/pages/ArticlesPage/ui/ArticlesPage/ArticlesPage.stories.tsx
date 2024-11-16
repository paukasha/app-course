import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticlesPage>;

type Story = StoryObj<typeof ArticlesPage>;
export const Primary: Story = {
    args: {},
};
