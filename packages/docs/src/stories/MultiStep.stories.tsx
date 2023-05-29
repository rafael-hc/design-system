import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@rhcode/react'

export default {
  title: 'Form/Multi Step',
  tags: ['autodocs'],
  component: MultiStep,
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {story()}
        </Box>
      )
    },
  ],
  args: {
    size: 8,
    // currentStep: 1,
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}
export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 8,
  },
}
