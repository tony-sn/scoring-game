import { NavigateFunction } from "react-router-dom";

export interface NavigationProps {
  navigate: NavigateFunction;
}

interface Fields<TFields> {
  fields: {
    name: TFields;
    score: TFields;
  };
}

export interface Record extends Fields<string> {
  id: string;
}

export interface Theme {
  mainBgColor: string;
  mainTextColor: string;
  sharedStyles?: {
    [key: string]: string;
  };
  accent?: string;
}

export type TODO_TYPEME = any;
