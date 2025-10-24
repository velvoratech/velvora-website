import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // public key for client
  key_secret: process.env.RAZORPAY_KEY_SECRET,      // secret for server only
});

export async function POST(req) {
  try {
    const amount = 18 * 100; // ₹18 in paise
    const currency = "INR";

    const options = {
      amount,
      currency,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Order creation failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
