export const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[[$^*()+?.|])(?=.{6,})")
export const weakRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})")
export const veryWeakRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])")