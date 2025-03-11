import Api from "@/utils/api"

export const createPaymentIntent = async (amount: number, currency: string) => {
  const response = await Api.post("/create-payment-intent", {
    amount,
    currency,
  })

  return response.data.clientSeceret
}
