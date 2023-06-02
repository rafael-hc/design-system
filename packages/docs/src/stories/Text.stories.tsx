import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@rhcode/react'

export default {
  title: 'Typography/Texto',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eos voluptate ipsam, neque ut culpa, dignissimos adipisci reprehenderit provident vitae minus, deserunt numquam quia at non voluptatem fugit repellat et.',
    size: 'md',
  },
  argTypes: {
    size: {
      description: 'Text size',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const Strong: StoryObj<TextProps> = {
  args: {
    children: 'Submit',
    as: 'strong',
    className: 'bg-red-500',
  },
}
