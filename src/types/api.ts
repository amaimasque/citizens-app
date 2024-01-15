export type City = {
  name: string
  population: number
}

export type State = {
  code: string
  name: string
  cities: City[]
}

export type Country = {
  code: string
  name: string
  states: State[]
}