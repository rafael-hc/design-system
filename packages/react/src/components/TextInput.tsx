import { ComponentProps } from 'react'

export interface TextInputProps extends ComponentProps<'input'> {
  prefix?: string
}
export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <div className="box-border flex items-baseline rounded-sm border-2 border-gray-900 bg-gray-900 px-4 py-3 focus-within:border-ignite-300 [&:has(input:disabled)]:cursor-not-allowed [&:has(input:disabled)]:opacity-50">
      {!!prefix && (
        <span className="font-default text-sm font-regular text-gray-400">
          {prefix}
        </span>
      )}
      <input
        className="right-0 w-full border-0 bg-transparent font-default text-sm font-regular text-white placeholder:text-gray-400 focus:outline-0 disabled:cursor-not-allowed"
        {...props}
      />
    </div>
  )
}
