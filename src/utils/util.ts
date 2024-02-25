export const setTheme = (value: string): void => localStorage.setItem('theme', value);

export const getTheme = (): string => localStorage.getItem('theme') ?? "";
