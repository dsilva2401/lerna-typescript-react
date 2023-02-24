import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContentLayout } from '../../../src/BrandDashboard/Components/ContentLayout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: ContentLayout,
  argTypes: {},
} as ComponentMeta<typeof ContentLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentLayout> = (args) => (
  <ContentLayout {...args}>
    <h1>Content</h1>
  </ContentLayout>
)

export const Default = Template.bind({});

Default.args = {
  style: {
    backgroundColor: '#f7f8fc',
    mainColor: '#4c6efa',
  },
  header: {
    titleIcon: 'https://rc.brij.it/assets/images/analytics.png',
    title: 'Analytics',
    logo: 'https://rc.brij.it/optimized-images/e4PtMaTjRC4a64EEc/same-dims.webp',
    middleContainerText: 'Your are currently impersonating Hurom',
    middleContainerActionText: 'Cancel Impersonation',
    middleContainerAction: () => {
      console.log('123')
    }
  }
}

export const WithoutMiddleContainer = Template.bind({});

WithoutMiddleContainer.args = {
  style: {
    backgroundColor: '#f7f8fc',
    mainColor: '#4c6efa',
  },
  header: {
    titleIcon: 'https://rc.brij.it/assets/images/analytics.png',
    title: 'Analytics',
    logo: 'https://rc.brij.it/assets/images/BRIJ%20LOGO%20Black.png',
  },
  heightFitContent: true,
}