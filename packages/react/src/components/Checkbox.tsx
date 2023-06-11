import classNames from 'classnames'
import { ComponentProps, ElementRef, forwardRef } from 'react'

export interface CheckboxProps extends ComponentProps<'input'> {
  className?: string
}
export const Checkbox = forwardRef<ElementRef<'input'>, CheckboxProps>(
  ({ className, ...props }: CheckboxProps, ref) => {
    return (
      <input
        {...props}
        type="checkbox"
        className={classNames(
          'form-checkbox h-6 w-6 cursor-pointer rounded-xs border-2 border-gray-900 bg-gray-900 text-ignite-500 focus:border-ignite-300 focus:outline-none focus:outline-offset-0 focus:ring-0 focus:ring-offset-0 checked:focus:border-ignite-300',
          className,
        )}
        ref={ref}
      />
    )
  },
)

Checkbox.displayName = 'Checkbox'
