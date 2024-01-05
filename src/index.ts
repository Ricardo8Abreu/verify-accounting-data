type ValidData = any[] | string

export type VerifyDataValidation = boolean | null

const falseStrings = ["null", "NaN", "undefined"]

const defaultReturnError = (message: string) => {
    return {
        value: null,
        status: false,
        quantity: null,
        message
    }
}

const verifyData = (data: ValidData) => {
    try {

        if (!data) {
            return defaultReturnError(`Data is ${data}`)
        }

        const isFalseString = falseStrings.find((falseString) => falseString === data)

        if (isFalseString) {
            return defaultReturnError(`Data is ${data}`)
        }

        const quantity = data.length
        const value = quantity > 0

        return {
            value,
            status: true,
            quantity,
            message: "Ok"
        }

    } catch (error) {
        const message = (error as Error).message
        console.log("🚀 ~ file: verifyData.ts:20 ~ verifyData ~ message:", message)
        return defaultReturnError(message)
    }
}

export default verifyData
