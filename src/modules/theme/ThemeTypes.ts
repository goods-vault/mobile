export enum ThemeTypes {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

export type ThemeType = ThemeTypes.LIGHT | ThemeTypes.DARK;

export interface IColorsValues {
  light: string;
  dark: string;
}

export interface IColors {
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  accentDefault: string;
  textPrimary: string;
  textSecondary: string;
  error: string;
  violet: string;
  yellow: string;
}

export enum ColorsKeys {
  backgroundPrimary = "backgroundPrimary",
  backgroundSecondary = "backgroundSecondary",
  backgroundTertiary = "backgroundTertiary",
  accentDefault = "accentDefault",
  textPrimary = "textPrimary",
  textSecondary = "textSecondary",
  error = "error",
  violet = "violet",
  yellow = "yellow",
}

export interface IThemeContext {
  theme: ThemeType;
  selectTheme: ThemeTypes;
  changeTheme: (value: ThemeTypes)=> void;
}
