import FormGroup from '@/components/FormGroup/FormGroup'
import Input from '@/components/Input/Input'
import { useForm, type SubmitHandler } from 'react-hook-form'
import SubmitButton from '@/components/Buttons/SubmitButton/SubmitButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/validations/formSchemas'

interface LoginFormValues {
  email: string
  password: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.info(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
      <FormGroup>
        <Input register={register} name="email" />
        {errors && <span role="alert">{errors.email?.message}</span>}
      </FormGroup>
      <FormGroup>
        <Input register={register} name="password" />
        {errors && <span role="alert">{errors.password?.message}</span>}
      </FormGroup>
      <SubmitButton title="Login" />
    </form>
  )
}
