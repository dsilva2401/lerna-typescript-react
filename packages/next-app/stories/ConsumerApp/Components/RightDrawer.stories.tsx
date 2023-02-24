import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RightDrawerContainer, RightDrawerProvider, useRightDrawer } from '../../../src/ConsumerApp/Components/RightDrawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: RightDrawerContainer,
  argTypes: {},
} as ComponentMeta<typeof RightDrawerContainer>;

const Child: ComponentStory<typeof RightDrawerContainer> = (args) => {
  const { open } = useRightDrawer()
  return (
    <RightDrawerContainer {...args} drawerChild={args.drawerChild}>
      <button onClick={() => {
        open()
      }}>Open</button>
    </RightDrawerContainer>
  )
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RightDrawerContainer> = (args) => (
  <RightDrawerProvider>
    <div style={{ width: '18rem', height: '30rem', position: 'relative', background: '#cccccc' }}>
      <Child {...args} />
    </div>
  </RightDrawerProvider>
)

export const Default = Template.bind({});

Default.args = {
  style: {
    width: '17rem',
    topLeftBorderRadius: 20
  },
  drawerChild: (
    <div>Hello</div>
  )
}
