type SelectInputData = {
  value: string
  display: string
}
export type SelectInputProps = {
  data: SelectInputData[]
  selected: string
  onChange: (selected: string) => void
}