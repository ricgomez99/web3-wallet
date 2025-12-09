interface ErrorMessageProps {
  children: React.ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <span role="alert">{children}</span>
}
