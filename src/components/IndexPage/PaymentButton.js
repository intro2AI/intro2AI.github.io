import React, { useEffect, useRef, useState } from 'react';
import Element from '../Element/Element';

const PaymentButton = () => {
  const formRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (formRef.current && !formRef.current.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_Ov5U4jej5bshyH"; // Your Razorpay payment button ID
      script.addEventListener("click", () => {
        setShowButton(false);
      });
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <Element flex spaceAround className="col-10 spacing" paddingBottom={2}>
      {showButton && (
        <form ref={formRef}></form>
      )}
    </Element>
  );
};

export default PaymentButton;