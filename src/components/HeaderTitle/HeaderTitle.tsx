interface HeaderTitleProps {
  title: string
}

export default function HeaderTitle({ title }: HeaderTitleProps) {
  return <h2>{title}</h2>
}
