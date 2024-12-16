module.exports = (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ${componentName} } from './${componentName}';

export default {
    title: '${layer}/${componentName}',
    component: ${componentName},
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Normal = Template.bind({});
export const Primary: Story = {
       args: {}
};`;
