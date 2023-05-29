import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: 'md' | 'sm' | 'full'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'cancel'
  defaultStyle?: string
}

export function Button(props: ButtonProps) {
  const { children, size = 'md', variant = 'primary', ...rest } = props
  const sizes = {
    md: ' h-11 text-sm',
    sm: 'h-9',
    full: 'w-full h-11 text-2xl',
  }
  const style = `rounded-sm min-w-[120px] disabled:cursor-not-allowed py-0 px-4 font-m flex box-border cursor-pointer font-medium text-center items-center justify-center gap-2 ${sizes[size]}`
  const variants = {
    primary: (
      <PrimaryButton defaultStyle={style} {...rest}>
        {children}
      </PrimaryButton>
    ),
    secondary: (
      <SecondaryButton defaultStyle={style} {...rest}>
        {children}
      </SecondaryButton>
    ),
    tertiary: (
      <TertiaryButton defaultStyle={style} {...rest}>
        {children}
      </TertiaryButton>
    ),
    cancel: (
      <CancelButton defaultStyle={style} {...rest}>
        {children}
      </CancelButton>
    ),
  }
  return variants[variant]
}

function PrimaryButton({ children, defaultStyle, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${defaultStyle} bg-ignite-500 text-white transition-all enabled:hover:bg-ignite-300 disabled:bg-gray-200`}
    >
      {children}
      {/*  */}
    </button>
  )
}

function SecondaryButton({
  children,

  defaultStyle,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${defaultStyle} border-2 border-ignite-500 text-ignite-300 enabled:hover:bg-ignite-500 enabled:hover:text-white disabled:border-gray-200 disabled:text-gray-200`}
    >
      {children}
    </button>
  )
}

function TertiaryButton({
  children,

  defaultStyle,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${defaultStyle} text-gray-100 enabled:text-white disabled:text-gray-600`}
    >
      {children}
    </button>
  )
}

function CancelButton({ children, defaultStyle, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`${defaultStyle} bg-red-600`}>
      {children}
    </button>
  )
}
