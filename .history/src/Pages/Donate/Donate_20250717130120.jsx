import React, { useState } from "react";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalAmount = amount || customAmount;
        if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }
        alert(`Thank you for donating ৳${finalAmount}!`);
        // You can send `finalAmount` to your backend/payment gateway here
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
                    Support Quran Reading
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Your donation helps us improve this platform and support the people behind it.
                </p>


                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Preset amounts */}
                    <div className="flex justify-center gap-4">
                        {[100, 250, 500].map((val) => (
                            <button
                                type="button"
                                key={val}
                                onClick={() => handleAmountClick(val)}
                                className={`px-4 py-2 rounded-md border ${amount === val
                                    ? "bg-green-600 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                ৳{val}
                            </button>
                        ))}
                    </div>

                    {/* Custom amount */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Or enter a custom amount (৳)
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-green-500"
                            placeholder="Enter amount"
                        />
                    </div>

                    {/* Payment method (placeholder) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Payment Method
                        </label>
                        <select className="w-full border px-4 py-2 rounded-md">
                            <option value="bkash">bKash</option>
                            <option value="nagad">Nagad</option>
                            <option value="rocket">Rocket</option>
                            <option value="card">Credit/Debit Card</option>
                        </select>
                    </div>

                    <a
                        href="https://your-bkash-or-stripe-payment-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md text-center"
                    >
                        Donate Now
                    </a>

                </form>
                <p className="text-center mt-4 text-sm text-gray-600">
                    Or You Can Donate via bKash: <strong>01731797802</strong><br />
                </p>
            </div>
        </div>
    );
};

export default Donate;
