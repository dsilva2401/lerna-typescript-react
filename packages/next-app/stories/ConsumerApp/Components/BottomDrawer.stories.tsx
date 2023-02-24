import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BottomDrawerContainer } from '../../../src/ConsumerApp/Components/BottomDrawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: BottomDrawerContainer,
  argTypes: {},
} as ComponentMeta<typeof BottomDrawerContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomDrawerContainer> = (args) => (
  <div style={{ width: '18rem', height: '30rem', position: 'relative', background: '#ddd' }}>
    <BottomDrawerContainer {...args}>
      <div>Sample Child</div>
    </BottomDrawerContainer>
  </div>
)

export const Core = Template.bind({});

Core.args = {
  style: {},
  openThreshold: 0.5,
  minimizedChild: <div>Hello 123</div>,
  expandedChild: <div>Hello 456<br/>Hello 456<br/>Hello 456<br/>Hello 456</div>
}

export const WithDecoration = Template.bind({});

WithDecoration.args = {
  style: {borderRadius: 26
  },
  showDragger: true,
  closable: true,
  openThreshold: 0.5,
  minimizedChild: <div>Hello 123</div>,
  expandedChild: <div>Hello 456<br/>Hello 456<br/>Hello 456<br/>Hello 456</div>
}