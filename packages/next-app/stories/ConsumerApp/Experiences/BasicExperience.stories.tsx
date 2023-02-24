import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BasicExperience } from '../../../src/ConsumerApp/Experiences/BasicExperience';

export default {
  // title: config.storyPath+'Modules/BasicExperience',
  component: BasicExperience,
  argTypes: {},
} as ComponentMeta<typeof BasicExperience>;

const Template: ComponentStory<typeof BasicExperience> = (args) => (
  <div style={{ width: '390px', height: '844px', position: 'relative', background: '#cccccc', border: '1px solid #ddd' }}>
    <BasicExperience {...args} />
  </div>
)

export const Default = Template.bind({});

Default.args = {
  brand: {
    logo: 'https://ds-test-pub-data.s3.amazonaws.com/testData/XTku8sp2eXp7xxvhC.png',
    mainColor: '#1c3965',
  },
  experience: {
    backgroundMedia: {
      type: 'image',
      url: 'https://v2.brij.it/optimized-images/hqPBdJzPHswwJ2rTQ/1000x1000.webp',
    },
    title: 'Test experience',
    modules: [
      {
        title: 'Activate warranty'
      },
      {
        title: 'Test module 1'
      },
      {
        title: 'Test module 2'
      },
    ]
  }
}
