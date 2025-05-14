import { HTMLAttributes } from "react";
import { IconType } from "react-icons";

export type NavItemProps = {
  label: string;
  href: string;
  Icon: IconType;
};

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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
  name:string
};

export type GenreType = {
  id: number;
  name: string;
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  movie: MovieType;
}
