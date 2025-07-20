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
            const res = await fetch("https://quran-server-6o4zwn93w-nazifa-tabassums-projects.vercel.app/api/payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: finalAmount,
                    customerName: "Your Name",
                    customerEmail: "you@example.com",
                }),
            });

            const data = await res.json();
            if (data.url) {
                window.location.href = data.url; // redirect to SSLCommerz
            } else {
                alert("Failed to initiate payment.");
            }
        } catch (err) {
            console.error(err);
            alert("Error processing payment.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-300">
            <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-center mb-4">
                    <h2 className="text-2xl font-bold text-[#15B3B6] flex items-center gap-2 dark:text-[#15B3B6]">
                        <GiPalmTree />
                        Support Quran Reading
                    </h2>
                </div>

                <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                    Your donation helps us improve this platform and support the people behind it.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Preset amounts */}
                    <div className="flex justify-center gap-4">
                        {[100, 250, 500].map((val) => (
                            <button
                                type="button"
                                key={val}
                                aria-required
                                onClick={() => handleAmountClick(val)}
                                className={`px-4 py-2 rounded-md border ${amount === val
                                        ? "bg-[#15B3B6] text-white"
                                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    }`}
                            >
                                ৳{val}
                            </button>
                        ))}
                    </div>

                    {/* Custom amount */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Or enter a custom amount (৳)
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="w-full border px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring focus:border-[#15B3B6]"
                            placeholder="Enter amount"
                        />
                    </div>

                    {/* Payment method (placeholder) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Payment Method
                        </label>
                        <select className="w-full border px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white">
                            <option value="bkash">bKash</option>
                            <option value="nagad">Nagad</option>
                            <option value="rocket">Rocket</option>
                            <option value="card">Credit/Debit Card</option>
                        </select>
                    </div>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block bg-[#15B3B6] hover:bg-[#119CA0] text-white font-semibold py-2 rounded-md text-center"
                    >
                        Donate Now
                    </a>
                </form>

                <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
                    Or You Can Donate via bKash: <strong>01731797802</strong>
                </p>
            </div>
        </div>
    );
};

export default Donate;
