export const getDefaultReturnError = (message: string) => {
  return {
    status: false,
    message,
    hasData: null,
    quantity: null,
  }
}