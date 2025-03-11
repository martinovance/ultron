import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material"
import MobileNav from "../Home/components/MobileNav"
import Appbar from "../Home/components/Appbar"
import Navbar from "../Home/components/Navbar"
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import { createPaymentIntent } from "@/services/paymentService"
import { useMutation, useQuery } from "@tanstack/react-query"
import { StripeCardElement } from "@stripe/stripe-js"
// import GridTest from "./GridTest"

const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      border: "1px solid #ccc",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
    },
  },
}

const Payment = () => {
  const stripe = useStripe()
  const elements = useElements()

  const { data: clientSecret, isLoading } = useQuery({
    queryKey: ["create-payment-intent"],
    queryFn: () => createPaymentIntent(1000, "usd"),
    staleTime: 1000 * 60 * 5,
  })

  const paymentMutation = useMutation({
    mutationFn: async (cardElement: StripeCardElement) => {
      if (!stripe || !elements || !clientSecret) {
        throw new Error("Stripe not initialized!")
      }

      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      )

      if (error) {
        throw new Error(error.message)
      }

      return paymentIntent
    },
    onSuccess: () => {
      alert("Payment Successful")
    },
    onError: () => {
      throw new Error("Payment unsuccessful")
    },
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const cardElement = elements?.getElement(CardElement)
    if (!cardElement) {
      throw new Error("Card element not found")
      return
    }

    paymentMutation.mutate(cardElement)
  }
  return (
    <>
      <MobileNav />
      <Appbar />
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", sm: "center" },
          alignItems: "center",
          mt: 2,
          mb: 2,
          px: { xs: "16px", sm: "70px" },
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "500px" } }}>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "10px",
                gap: 2,
                width: "100%",
              }}
            >
              {!isLoading ? (
                <p>Loading payment fields...</p>
              ) : (
                <Grid
                  container
                  sx={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "24px",
                    background: "#E6F3FF",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{
                      paddingLeft: "0px !important",
                      "& .MuiOutlinedInput-root": {
                        background: "#fff",
                        "& fieldset": {
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
                        },
                      },
                      "& .MuiSelect-outlined": {
                        background: "#fff",
                      },
                    }}
                  >
                    <InputLabel>Full Name</InputLabel>
                    <TextField
                      placeholder="Full Name"
                      fullWidth
                      inputProps={{
                        style: {
                          height: "12px",
                          background: "#fff",
                          border: "1px solid #fff",
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{ mt: 2, paddingLeft: "0px !important" }}
                  >
                    <InputLabel>Country</InputLabel>
                    <TextField
                      select
                      fullWidth
                      InputProps={{
                        sx: {
                          background: "white",
                          height: "40px",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                        },
                      }}
                    >
                      <MenuItem value="United States">United States</MenuItem>
                      <MenuItem value="Canada">Canada</MenuItem>
                    </TextField>
                  </Grid>
                  <InputLabel sx={{ mt: 2 }}>Card Number</InputLabel>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      padding: "10px",
                      borderRadius: "10px",
                      bgcolor: "#fff",
                    }}
                  >
                    <CardNumberElement options={cardElementOptions} />
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    sx={{ mt: 2, paddingLeft: "0px !important" }}
                  >
                    <InputLabel sx={{ width: "50%" }}>
                      Expiration Date
                    </InputLabel>
                    <Box
                      sx={{
                        padding: "10px",
                        borderRadius: "10px",
                        maxWidth: "85%",
                        bgcolor: "#fff",
                      }}
                    >
                      <CardExpiryElement />
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    sx={{
                      mt: 2,
                      paddingLeft: "0px !important",
                    }}
                  >
                    <InputLabel sx={{ width: "50%" }}>Security Code</InputLabel>
                    <Box
                      sx={{
                        padding: "10px",
                        borderRadius: "10px",
                        maxWidth: "100%",
                        bgcolor: "#fff",
                      }}
                    >
                      <CardCvcElement />
                    </Box>
                  </Grid>
                </Grid>
              )}
              <Button
                type="submit"
                fullWidth
                sx={{
                  bgcolor: "#007bff",
                  color: "#fff",
                  textTransform: "capitalize",
                }}
                // disable={!stripe || !clientSecret || !paymentMutation}
              >
                {!paymentMutation ? "Processing..." : "Pay"}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default Payment
