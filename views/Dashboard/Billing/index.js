import React, { useState } from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Icon,
  Input,
} from "@chakra-ui/react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import { FaPaypal, FaWallet } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";
import BillingInformation from "./components/BillingInformation";
import CreditCard from "./components/CreditCard";
import Invoices from "./components/Invoices";
import PaymentMethod from "./components/PaymentMethod";
import PaymentStatistics from "./components/PaymentStatistics";
import Transactions from "./components/Transactions";

function Billing() {
  const [paymentError, setPaymentError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
// checks for avilability If either of them is missing, the function returns early and doesn't proceed with the payment processing.
    if (!stripe || !elements) {
      return;
    }
// it represent the card I/P field which user entered
    const cardElement = elements.getElement(CardElement);
//method communicates with Stripe's API to securely tokenize the card information
    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({ 
        type: "card",
        card: cardElement,
      });

      if (error) {
        setPaymentError(error.message);
      } else {
        // Make API call to process the payment with paymentMethod.id
        console.log(paymentMethod);
        setPaymentError(null);
        alert("payment Done!!")
      }
    } catch (error) {
      console.log(error);
      setPaymentError("An error occurred while processing the payment.");
    }
  };

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows="1fr">
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap="26px"
          >
            <CreditCard
              backgroundImage={BackgroundCard1}
              title={"SBI"}
              number={"7812 2139 0823 XXXX"}
              validity={{
                name: "VALID THRU",
                data: "05/24",
              }}
              cvv={{
                name: "CVV",
                code: "09x",
              }}
              icon={
                <Icon
                  as={RiMastercardFill}
                  w="48px"
                  h="auto"
                  color="gray.400"
                />
              }
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color="white" as={FaWallet} />}
              title={"Salary"}
              description={"Belong interactive"}
              amount={2000}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color="white" as={FaPaypal} />}
              title={"Paypal"}
              description={"Freelance Payment"}
              amount={4550}
            />
          </Grid>
          {/* <PaymentMethod
            title={"Payment Method"}
            mastercard={{
              icon: <MastercardIcon w="100%" h="100%" />,
              number: "7812 2139 0823 XXXX",
            }}
            visa={{
              icon: <VisaIcon w="100%" h="100%" />,
              number: "7812 2139 0823 XXXX",
            }}
          /> */}
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <form onSubmit={handleSubmit}>
              {/* Card input fields */}
              {/* <FormControl>
                <FormLabel>Card Holder Name</FormLabel>
                <Input type="text" placeholder="Dikshant" />
              </FormControl> */}

              <FormControl mt={4}>
                <FormLabel>Card Number</FormLabel>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#dc3545",
                      },
                    },
                    // Additional options...
                  }}
                />
              </FormControl>

              <Flex mt={4} justifyContent="space-between">
                <FormControl>
                  <FormLabel>Expiry Date</FormLabel>
                  <Input type="text" placeholder="MM/YY" />
                </FormControl>

                <FormControl>
                  <FormLabel>CVV</FormLabel>
                  <Input type="text" placeholder="***" />
                </FormControl>
              </Flex>
              <Button
                mt={6}
                colorScheme="teal"
                size="lg"
                width="full"
                type="submit"
              >
                Pay Now
              </Button>
            </form>
            {paymentError && <p>{paymentError}</p>}
          </Box>
        </Box>
        <Invoices title={"Invoices"} data={invoicesData} />
      </Grid>
      <Grid templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }}>
        <BillingInformation title={"Billing Information"} data={billingData} />
        <Transactions
          title={"Your Transactions"}
          date={"23 - 30 March"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        />
      </Grid>
    </Flex>
  );
}

export default Billing;
