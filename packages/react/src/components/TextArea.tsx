/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react'

export interface TextAreaProps extends ComponentProps<'textarea'> { }
export function TextArea(props: TextAreaProps) {
  return <textarea className="box-border w-full font-default text-sm text-white font-regular resize-y min-h[80px] rounded-sm border-2 border-gray-900 bg-gray-900 px-4 py-3 focus:border-ignite-300 focus:outline-0 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray-400" {...props}></textarea>
}
