export const truncate = string =>
  string.length > 200 ? string.substring(0, 200) + "..." : string;
