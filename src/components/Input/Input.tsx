import {
  type UseFormRegister,
  type Path,
  type FieldValues,
} from 'react-hook-form'

interface InputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>
  register: UseFormRegister<TFieldValues>
}

export default function Input<TFieldValues extends FieldValues>({
  name,
  register,
}: InputProps<TFieldValues>) {
  return <input {...register(name)} placeholder={name} />
}
