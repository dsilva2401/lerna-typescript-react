import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LeftDrawer } from '../../../src/BrandDashboard/Components/LeftDrawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: LeftDrawer,
  argTypes: {},
} as ComponentMeta<typeof LeftDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LeftDrawer> = (args) => (
  <LeftDrawer {...args}>
    <h1>Content</h1>
  </LeftDrawer>
)

export const Default = Template.bind({});

Default.args = {
  logo: 'https://rc.brij.it/assets/dashboard-images/brij.png',
  style: {
    backgroundColor: '#4c6efa',
  },
  mainItems: [
    {
      icon: (
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" _ngcontent-hpj-c119="" aria-hidden="true">
          <path d="M17.5232 12.9412H10.5441L15.1921 17.5891C15.3697 17.7667 15.6621 17.7812 15.8447 17.6091C16.9829 16.5367 17.7659 15.0912 17.9956 13.4662C18.035 13.1879 17.8041 12.9412 17.5232 12.9412ZM17.0576 11.0353C16.8153 7.52176 14.0076 4.71412 10.4941 4.47177C10.2259 4.45324 10 4.67941 10 4.94824V11.5294H16.5815C16.8503 11.5294 17.0762 11.3035 17.0576 11.0353ZM8.58824 12.9412V5.96206C8.58824 5.68118 8.34147 5.45029 8.06353 5.48971C4.55853 5.985 1.87942 9.04705 2.00412 12.7168C2.13236 16.4856 5.37736 19.5761 9.14794 19.5288C10.6303 19.5103 12 19.0326 13.1262 18.2338C13.3585 18.0691 13.3738 17.727 13.1724 17.5256L8.58824 12.9412Z" fill="white" _ngcontent-hpj-c119=""></path>
        </svg>
      ),
      label: 'Analytics',
      link: '/analytics',
      ActionWrapper: ({ children }) => (
        <a href="#asd-analytics">{children}</a>
      ),
    },
    {
      icon: (
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" _ngcontent-hpj-c119="" aria-hidden="true">
          <path d="M17.5232 12.9412H10.5441L15.1921 17.5891C15.3697 17.7667 15.6621 17.7812 15.8447 17.6091C16.9829 16.5367 17.7659 15.0912 17.9956 13.4662C18.035 13.1879 17.8041 12.9412 17.5232 12.9412ZM17.0576 11.0353C16.8153 7.52176 14.0076 4.71412 10.4941 4.47177C10.2259 4.45324 10 4.67941 10 4.94824V11.5294H16.5815C16.8503 11.5294 17.0762 11.3035 17.0576 11.0353ZM8.58824 12.9412V5.96206C8.58824 5.68118 8.34147 5.45029 8.06353 5.48971C4.55853 5.985 1.87942 9.04705 2.00412 12.7168C2.13236 16.4856 5.37736 19.5761 9.14794 19.5288C10.6303 19.5103 12 19.0326 13.1262 18.2338C13.3585 18.0691 13.3738 17.727 13.1724 17.5256L8.58824 12.9412Z" fill="white" _ngcontent-hpj-c119=""></path>
        </svg>
      ),
      label: 'Users',
      link: '/analytics',
      ActionWrapper: ({ children }) => (
        <a href="#asd-users">{children}</a>
      ),
    },
    {
      icon: (
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" _ngcontent-hpj-c119="" aria-hidden="true">
          <path d="M17.5232 12.9412H10.5441L15.1921 17.5891C15.3697 17.7667 15.6621 17.7812 15.8447 17.6091C16.9829 16.5367 17.7659 15.0912 17.9956 13.4662C18.035 13.1879 17.8041 12.9412 17.5232 12.9412ZM17.0576 11.0353C16.8153 7.52176 14.0076 4.71412 10.4941 4.47177C10.2259 4.45324 10 4.67941 10 4.94824V11.5294H16.5815C16.8503 11.5294 17.0762 11.3035 17.0576 11.0353ZM8.58824 12.9412V5.96206C8.58824 5.68118 8.34147 5.45029 8.06353 5.48971C4.55853 5.985 1.87942 9.04705 2.00412 12.7168C2.13236 16.4856 5.37736 19.5761 9.14794 19.5288C10.6303 19.5103 12 19.0326 13.1262 18.2338C13.3585 18.0691 13.3738 17.727 13.1724 17.5256L8.58824 12.9412Z" fill="white" _ngcontent-hpj-c119=""></path>
        </svg>
      ),
      label: 'Brands',
      link: '/analytics',
      ActionWrapper: ({ children }) => (
        <a href="#asd-brands">{children}</a>
      ),
    },
  ],
  bottomItems: [
    {
      icon: (
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" _ngcontent-hpj-c119="" aria-hidden="true">
          <path d="M17.5232 12.9412H10.5441L15.1921 17.5891C15.3697 17.7667 15.6621 17.7812 15.8447 17.6091C16.9829 16.5367 17.7659 15.0912 17.9956 13.4662C18.035 13.1879 17.8041 12.9412 17.5232 12.9412ZM17.0576 11.0353C16.8153 7.52176 14.0076 4.71412 10.4941 4.47177C10.2259 4.45324 10 4.67941 10 4.94824V11.5294H16.5815C16.8503 11.5294 17.0762 11.3035 17.0576 11.0353ZM8.58824 12.9412V5.96206C8.58824 5.68118 8.34147 5.45029 8.06353 5.48971C4.55853 5.985 1.87942 9.04705 2.00412 12.7168C2.13236 16.4856 5.37736 19.5761 9.14794 19.5288C10.6303 19.5103 12 19.0326 13.1262 18.2338C13.3585 18.0691 13.3738 17.727 13.1724 17.5256L8.58824 12.9412Z" fill="white" _ngcontent-hpj-c119=""></path>
        </svg>
      ),
      label: 'Profile',
      link: '/analytics'
    },
    {
      icon: (
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" _ngcontent-hpj-c119="" aria-hidden="true">
          <path d="M17.5232 12.9412H10.5441L15.1921 17.5891C15.3697 17.7667 15.6621 17.7812 15.8447 17.6091C16.9829 16.5367 17.7659 15.0912 17.9956 13.4662C18.035 13.1879 17.8041 12.9412 17.5232 12.9412ZM17.0576 11.0353C16.8153 7.52176 14.0076 4.71412 10.4941 4.47177C10.2259 4.45324 10 4.67941 10 4.94824V11.5294H16.5815C16.8503 11.5294 17.0762 11.3035 17.0576 11.0353ZM8.58824 12.9412V5.96206C8.58824 5.68118 8.34147 5.45029 8.06353 5.48971C4.55853 5.985 1.87942 9.04705 2.00412 12.7168C2.13236 16.4856 5.37736 19.5761 9.14794 19.5288C10.6303 19.5103 12 19.0326 13.1262 18.2338C13.3585 18.0691 13.3738 17.727 13.1724 17.5256L8.58824 12.9412Z" fill="white" _ngcontent-hpj-c119=""></path>
        </svg>
      ),
      label: 'Settings',
      link: '/analytics'
    },
  ]
}

export const Customized = Template.bind({});

Customized.args = {
  style: {
    backgroundColor: '#4c6efa'
  },
}