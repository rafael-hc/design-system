import * as AvatarPrimitive from '@radix-ui/react-avatar'
import classNames from 'classnames'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface AvatarProps
  extends ComponentProps<typeof AvatarPrimitive.AvatarImage> {
  className?: string
}

export function Avatar({ className, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={classNames(
        'inline-flex h-16 w-16 select-none items-center justify-center overflow-hidden rounded-full ',
        className,
      )}
    >
      <AvatarPrimitive.Image
        className="h-full w-full rounded-[inherit] object-cover"
        {...props}
      ></AvatarPrimitive.Image>
      <AvatarPrimitive.Fallback
        delayMs={600}
        className="leading-1 flex h-full w-full items-center justify-center bg-gray-600 text-md font-medium text-gray-800"
      >
        <User />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
