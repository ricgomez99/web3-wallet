import FormGroup from '@/components/FormGroup/FormGroup'
import Input from '@/components/Input/Input'
import { useForm, type SubmitHandler } from 'react-hook-form'
import SubmitButton from '@/components/Buttons/SubmitButton/SubmitButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/validations/formSchemas'
import { login } from '@/api/auth'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'

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
    const { email, password } = data
    login(email, password)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="login-form" noValidate>
      <FormGroup>
        <Input
          register={register}
          name="email"
          labelText="Email"
          type="email"
        />
        {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Input
          register={register}
          name="password"
          labelText="Password"
          type="password"
        />
        {errors.password && (
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        )}
      </FormGroup>
      <SubmitButton title="Login" />
    </form>
  )
}
