import classNames from 'classnames'
import { ComponentProps, forwardRef, ElementRef } from 'react'

export interface TextInputProps extends ComponentProps<'input'> {
  prefix?: string
  className?: string
  sizes?: 'sm' | 'md'
}
export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  ({ prefix, className, sizes = 'md', ...props }: TextInputProps, ref) => {
    const size = {
      sm: 'py-2 px-3',
      md: 'px-4 py-3',
    }
    return (
      <div
        className={classNames(
          `${size[sizes]} box-border flex items-center rounded-sm border-2 border-gray-900 bg-gray-900  focus-within:border-ignite-300 [&:has(input:disabled)]:cursor-not-allowed [&:has(input:disabled)]:opacity-50`,
          className,
        )}
      >
        {!!prefix && (
          <span className="font-default text-sm font-regular leading-[0] text-gray-400">
            {prefix}
          </span>
        )}
        <input
          className="right-0 w-full border-0 bg-transparent p-0 font-default text-sm font-regular leading-[0] text-white placeholder:text-gray-400 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed"
          {...props}
          ref={ref}
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
