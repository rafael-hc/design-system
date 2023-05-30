import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@rhcode/react'

export default {
  title: 'Form/Text Input',
  tags: ['autodocs'],
  component: TextInput,

  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <Text size="sm">Username:</Text>
          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
