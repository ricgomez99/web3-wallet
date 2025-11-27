interface FormGroupProps {
  children: React.ReactNode
}

export default function FormGroup({ children }: FormGroupProps) {
  return <div className="form-group">{children}</div>
}
