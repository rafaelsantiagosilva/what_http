export type Theme = {
  backgroundColor: string;
  primaryColor: string;
  primaryColorHover: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  inHighlightTextColor: string;
}

export const lightTheme: Theme = {
  backgroundColor: "#FFF",
  primaryColor: "#0077CC",
  primaryColorHover: "#005B99",
  primaryTextColor: "#333333",
  secondaryTextColor: "#555555",
  inHighlightTextColor: "#fff",
};

export const darkTheme: Theme = {
  backgroundColor: "#121212",
  primaryColor: "#1A73EB",
  primaryColorHover: "#166BB1",
  primaryTextColor: "#E0E0E0",
  secondaryTextColor: "#A1A1A1",
  inHighlightTextColor: "#fff",
}