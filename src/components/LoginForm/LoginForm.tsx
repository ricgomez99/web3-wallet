import FormGroup from '@/components/FormGroup/FormGroup'
import Input from '@/components/Input/Input'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/Buttons/SubmitButton/SubmitButton'

export default function LogginForm() {
  const { register } = useForm()

  return (
    <form data-testid="login-form">
      <FormGroup>
        <Input register={register} name="email" />
      </FormGroup>
      <FormGroup>
        <Input register={register} name="password" />
      </FormGroup>
      <SubmitButton title="Login" />
    </form>
  )
}
