/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import { ComponentProps, ReactNode } from 'react'

export interface TextProps extends ComponentProps<'p'> {
  children?: ReactNode
  size?:
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  as?: keyof JSX.IntrinsicElements
}
export function Text({ children, size = 'md', as = 'p', ...props }: TextProps) {
  const Tag: any = as
  return (
    <Tag
      className={`text-gray-100 font-default leading-base m-0 text-${size}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
