/* eslint-disable no-undef */
import { ComponentProps, ReactNode } from 'react'

export interface BoxProps extends ComponentProps<'div'> {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
}
export function Box({ children, as = 'div', ...props }: BoxProps) {
  const Tag: any = as
  return (
    <Tag
      className="rounded-md border border-gray-600 bg-gray-800 p-6"
      {...props}
    >
      {children}
    </Tag>
  )
}
