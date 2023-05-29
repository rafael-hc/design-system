import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@rhcode/react'

export default {
  title: 'Form/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
        >
          {story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    id: 'isPublic',
  },
}
export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
