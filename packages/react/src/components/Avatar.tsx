// import * as AvatarPrimitive from '@radix-ui/react-avatar'
import classNames from 'classnames'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<'img'> {
  className?: string
}

export function Avatar({ className, src, alt, ...props }: AvatarProps) {
  return (
    <div
      className={classNames(
        'inline-flex h-16 w-16 cursor-pointer select-none items-center justify-center overflow-hidden rounded-full',
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-[inherit] object-cover"
          {...props}
        />
      ) : (
        <span className="leading-1 flex h-full w-full items-center justify-center bg-gray-600 text-md font-medium text-gray-800">
          <User />
        </span>
      )}
    </div>
  )
}
