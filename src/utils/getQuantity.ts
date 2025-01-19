import { ValidData } from "../types"

export const getQuantity = (data: ValidData) => {
  try {
    let quantity: number | null = null

    if (typeof data === "object") {
      quantity = Object.keys(data).length
    }
    else  quantity = data.length

    return { quantity, message: "Ok" }
  } catch (error) {
    const message = (error as Error).message

    return { quantity: null, message }
  }
}