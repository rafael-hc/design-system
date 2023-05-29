import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@sell-solutions/react'

export default {
  title: 'Surfaces/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: <Text>Default</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
// export const Submit: StoryObj<BoxProps> = {
//   args: {
//     children: 'Submit',
//     variant: 'submit',
//     size: 'full',
//   },
// }
// export const Transparent: StoryObj<BoxProps> = {
//   args: {
//     children: 'Transparent',
//     variant: 'transparent',
//   },
// }
// export const Proceed: StoryObj<BoxProps> = {
//   args: {
//     children: 'Proceed',
//     variant: 'proceed',
//     size: 'full',
//   },
// }
// export const Cancel: StoryObj<BoxProps> = {
//   args: {
//     children: 'Cancel',
//     variant: 'cancel',
//   },
// }
