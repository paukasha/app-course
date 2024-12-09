import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;
export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'tab-1',
                content: 'tab 1 content',
            },
            {
                value: 'tab-2',
                content: 'tab 2 content',
            },
            {
                value: 'tab-1',
                content: 'tab 2 content',
            },
        ],
        value: 'tab-2',
        onTabClick: action('onTabClick'),
    },
};
