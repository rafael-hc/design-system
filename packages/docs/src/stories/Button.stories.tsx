import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@rhcode/react'
import { ArrowRight } from '@phosphor-icons/react'

export default {
  title: 'Form/Button',
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      description: 'Button type',
      options: ['primary', 'secondary', 'tertiary', 'cancel'],
      defaultValue: 'primary',
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      description: 'Button size',
      options: ['sm', 'md', 'full'],
      defaultValue: 'md',
      control: {
        type: 'inline-radio',
      },
    },
  },
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
  },
}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create new',
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  },
}
export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Small',
    size: 'sm',
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}
