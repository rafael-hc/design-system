/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

import { ComponentProps, ReactNode } from 'react'
import classNames from 'classnames'

export interface HeadingProps extends ComponentProps<'h2'> {
  children?: ReactNode
  className?: string
  size?:
  | 'sm'
  | 'md'
  | 'lg'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  as?: keyof JSX.IntrinsicElements
}

enum Sizes {
  sm = 'text-xl',
  md = 'text-2xl',
  lg = 'text-4xl',
  '2xl' = 'text-5xl',
  '3xl' = 'text-6xl',
  '4xl' = 'text-7xl',
  '5xl' = 'text-8xl',
  '6xl' = 'text-9xl',
}

export function Heading({ children, className, size = 'md', as = 'h2', ...props }: HeadingProps) {
  const Tag: any = as
  return (
    <Tag
      className={classNames(`text-gray-100 font-default leading-shorter m-0 ${Sizes[size]}`, className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
