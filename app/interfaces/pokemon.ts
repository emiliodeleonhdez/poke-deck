export interface Pokemon {
  name: string;
  image: string;
  types?: string[];
}

export interface TypesInfo<T> {
  type: T;
}
export interface TypeDetail {
  name: string;
  url: string;
}
