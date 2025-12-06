import {
  type UseFormRegister,
  type Path,
  type FieldValues,
} from 'react-hook-form'

import { useId } from 'react'

interface InputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>
  register: UseFormRegister<TFieldValues>
  labelText: string
  type: string
}

export default function Input<TFieldValues extends FieldValues>({
  name,
  register,
  labelText,
  type,
}: InputProps<TFieldValues>) {
  const inputId = useId()
  return (
    <>
      <label htmlFor={inputId}>{labelText}</label>
      <input id={inputId} {...register(name)} placeholder={name} type={type} />
    </>
  )
}
