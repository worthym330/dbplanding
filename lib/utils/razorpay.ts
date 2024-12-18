// lib/utils/razorpay.ts
export const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  interface RazorpayPaymentOptions {
    amount: number; // Amount in INR paise (e.g., 1000 for ₹10)
    currency: string;
    name: string;
    description: string;
    orderId: string; // Razorpay Order ID generated on the server
    prefill: {
      name: string;
      email: string;
      contact: string;
    };
  }
  
  export const initiateRazorpayPayment = async (
    data: RazorpayPaymentOptions,
    onSuccess: (response: any) => void,
    onFailure: (error: any) => void
  ) => {
    const res = await loadRazorpayScript();
  
    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }
  
    console.log(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID)
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: data.name,
      description: data.description,
      order_id: data.orderId,
      prefill: data.prefill,
      theme: {
        color: "#3399cc",
      },
      handler: (response: any) => {
        onSuccess(response);
      },
      modal: {
        ondismiss: () => {
          onFailure("Payment process was cancelled.");
        },
      },
    };
    
    console.log("Razorpay Options:", options);
    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };
  