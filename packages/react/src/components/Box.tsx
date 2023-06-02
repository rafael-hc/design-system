/* eslint-disable no-undef */
import { ComponentProps, ReactNode } from 'react'
import { Text } from './Text'
import classNames from 'classnames'

export interface BoxProps extends ComponentProps<'div'> {
  children?: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}
export function Box({ children, className, as = 'div', ...props }: BoxProps) {
  const Tag: any = as
  return (
    <Tag
      className={classNames(
        'rounded-md border border-gray-600 bg-gray-800 p-6',
        className,
      )}
      {...props}
    >
      <Text as="strong" className="bg-red-500 text-green-600" size="6xl">
        oi
      </Text>
      {children}
    </Tag>
  )
}
