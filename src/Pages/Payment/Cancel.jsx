import React from "react";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-yellow-800">
      <h2 className="text-3xl font-bold mb-4">⚠️ Payment Cancelled</h2>
      <p className="text-lg text-center">
        You cancelled the payment process. If it was a mistake, you can try again anytime.
      </p>
    </div>
  );
};

export default Cancel;
