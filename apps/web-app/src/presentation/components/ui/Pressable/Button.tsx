import type { ComponentProps, FC, ReactNode } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  Icon: ReactNode
  variant: 'filled' | 'outlined'
  onPress: () => void
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button {...props} />
  )
}
