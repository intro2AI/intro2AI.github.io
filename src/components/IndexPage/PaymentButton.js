import React, { useEffect, useRef } from 'react';
import Element from '../Element/Element';

const PaymentButton = () => {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current && !formRef.current.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_OtrjpUoKjvKcl2"; // Your Razorpay payment button ID
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <Element flex spaceAround className="col-10 spacing" paddingBottom={2}>
      <form ref={formRef}></form>
    </Element>
  );
};

export default PaymentButton;