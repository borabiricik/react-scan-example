export interface GetUsersResponse {
  results: Result[]
  info: Info
}

export interface Result {
  name: Name
  email: string
  picture: Picture
}

export interface Name {
  title: string
  first: string
  last: string
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface Info {
  seed: string
  results: number
  page: number
  version: string
}
