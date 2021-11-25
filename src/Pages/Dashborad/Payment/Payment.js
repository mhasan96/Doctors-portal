import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JyHaPJSEepEkpFdQQ0h8LAjArnHtw1te7N2xMfsGTCLm0FFDWXA4q997MUfpL5fu7ho0fAVwfay4fsB5fFrt4FH001RmN2Cn0"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointments] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please Pay: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>Price : ${appointment.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;

// 1 install stripe and stripe-react.
// 2. set publishable key
// 3. Elements
// 4. CheckoutForm
// -----------------
//5. create payment method
