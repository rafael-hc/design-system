/* eslint-disable prettier/prettier */
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface AvatarProps
  extends ComponentProps<typeof AvatarPrimitive.AvatarImage> { }

export function Avatar(props: AvatarProps) {
  return (
    <AvatarPrimitive.Root className="w-16 h-16 inline-flex select-none overflow-hidden items-center justify-center rounded-full ">
      <AvatarPrimitive.Image
        className="w-full h-full rounded-[inherit] object-cover"
        {...props}
      ></AvatarPrimitive.Image>
      <AvatarPrimitive.Fallback
        delayMs={600}
        className="bg-gray-600 leading-1 text-gray-800 flex h-full w-full items-center justify-center text-md font-medium"
      >
        <User />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
