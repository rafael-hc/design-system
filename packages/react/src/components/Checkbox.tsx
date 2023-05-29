/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react'

export interface CheckboxProps extends ComponentProps<'input'> { }
export function Checkbox(props: CheckboxProps) {
  return (
    <input
      {...props}
      type="checkbox"
      className="h-6 w-6 cursor-pointer rounded-xs border-2 border-gray-900 bg-gray-900 text-ignite-500 focus:border-ignite-300 focus:outline-none focus:outline-offset-0 focus:ring-0 focus:ring-offset-0 checked:focus:border-ignite-300"
    />
  )
}
