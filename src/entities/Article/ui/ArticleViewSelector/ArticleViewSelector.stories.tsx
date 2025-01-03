import type {Meta, StoryObj} from '@storybook/react';
import {ArticleViewSelector} from './ArticleViewSelector';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleViewSelector>;

type Story = StoryObj<typeof ArticleViewSelector>;
export const Primary: Story = {
    args: {},
};
