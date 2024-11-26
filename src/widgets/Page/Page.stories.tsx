import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

export default {
    title: 'shared/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Page>;

type Story = StoryObj<typeof Page>;
export const Primary: Story = {
    args: {},
};
