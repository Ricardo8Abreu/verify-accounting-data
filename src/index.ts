import { FalsyString, ValidData } from "./types"

import { getQuantity } from "./utils/getQuantity"
import { getDefaultReturnError } from "./utils/getDefaultReturnError"


export const falsyStrings:FalsyString[] = ["null", "NaN", "false", "undefined"]

const verifyData = (data: ValidData) => {
  try {

    if (!data) {
      return getDefaultReturnError(`Data is "${data}"`)
    }

    const isFalsyString = falsyStrings.find((falseString) => falseString === data)

    if (isFalsyString) {
      return getDefaultReturnError(`Data is ${data}`)
    }

    const { quantity, message } = getQuantity(data)

    if (quantity === null) {
      return getDefaultReturnError(`Quantity is ${quantity}: \n\n ${message}`)
    }

    const hasData = quantity > 0

    return {
      status: true,
      hasData,
      message: "Ok",
      quantity,
    }

  } catch (error) {
    const message = (error as Error).message
    console.log("🚀 ~ file: verifyData.ts:20 ~ verifyData ~ message:", message)
    return getDefaultReturnError(message)
  }
}

export default verifyData
