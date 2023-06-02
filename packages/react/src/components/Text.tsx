/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import { ComponentProps, ReactNode } from 'react'
import classNames from 'classnames'

export interface TextProps extends ComponentProps<'p'> {
  children?: ReactNode
  className?: string
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
export function Text({ children, className, size = 'md', as = 'p', ...props }: TextProps) {
  const Tag: any = as
  return (
    <Tag
      className={classNames(`text-gray-100 font-default leading-base m-0 text-${size}`, className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
