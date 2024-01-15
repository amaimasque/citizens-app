export type SelectInputData = {
  value: string
  display: string
}
export type SelectInputProps = {
  data: SelectInputData[]
  selected: string
  onChange: (selected: string) => void
  id: string
  label: string
}

export type CityCardProps = {
  population: number
  name: string
}

export type CityListProps = {
  data: CityCardProps[]
}