export interface Genre {
  id: number;
  genre: string;
}

export interface Country {
  id: number;
  country: string;
}

export interface FiltersResponse {
  genres: Genre[];
  countries: Country[];
}