import React, { useState } from "react";
import { GiPalmTree } from "react-icons/gi";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setAmount("");
    setCustomAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalAmount = amount || customAmount;

    if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    try {
      const res = await fetch(
        "https://quran-server-6o4zwn93w-nazifa-tabassums-projects.vercel.app/api/payment",
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: finalAmount,
            customerName: "Anonymous",
            customerEmail: "no-reply@example.com",
          }),
        }
      );

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to initiate payment.");
      }
    } catch (err) {
      console.error(err);
      alert("Error processing payment.");
    }
  };

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center text-center md:mb-4 ">
          <h2 className="text-2xl font-bold text-[#15B3B6] flex items-center gap-2 dark:text-[#15B3B6] md:flex-col flex-row">
            <GiPalmTree />
            Support Quran Reading
          </h2>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Your donation helps us improve this platform and support the people
          behind it.
        </p>

       
        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
          You Can Donate via bKash: <strong>+8801731797802</strong>
        </p>
      </div>
    </div>
  );
};

export default Donate;


