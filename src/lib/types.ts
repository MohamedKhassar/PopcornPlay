import { HTMLAttributes } from "react";
import { IconType } from "react-icons";

export type NavItemProps = {
  label: string;
  href: string;
  Icon: IconType;
};

export type MovieType = {
  runtime: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
  last_air_date: string;
  first_air_date: string;
  in_production:boolean
};

export type GenreType = {
  id: number;
  name: string;
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  movie: MovieType;
}

export type CastMember = {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
};
