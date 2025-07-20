import React from "react";

const Fail = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-700">
      <h2 className="text-3xl font-bold mb-4">❌ Payment Failed</h2>
      <p className="text-lg text-center">
        Unfortunately, the payment did not go through. Please try again or use a different method.
      </p>
    </div>
  );
};

export default Fail;
