
export const REGISTER = "REGISTER"

export const register = (user) => ({
    type: REGISTER,
    payload: user
})