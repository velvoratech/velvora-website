'use client';

import Script from "next/script";

export default function RazorpayScript() {
  return (
    <Script
      src="https://checkout.razorpay.com/v1/checkout.js"
      strategy="lazyOnload"
      onLoad={() => console.log('Razorpay loaded')}
    />
  );
}
