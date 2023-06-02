import classNames from 'classnames'
import { ComponentProps } from 'react'

export interface TextAreaProps extends ComponentProps<'textarea'> {
  className?: string
}
export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={classNames(
        'min-h[80px] box-border w-full resize-y rounded-sm border-2 border-gray-900 bg-gray-900 px-4 py-3 font-default text-sm font-regular text-white placeholder:text-gray-400 focus:border-ignite-300 focus:outline-0 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}
