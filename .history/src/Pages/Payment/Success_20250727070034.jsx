
const Success = () => {
  return (
    <div className="text-center mt-20">
      <h2 className="text-green-600 text-2xl font-bold">🎉 Payment Successful!</h2>
      <p className="mt-4">Thank you for supporting Quran Reading.</p>
    </div>

     <form className="space-y-6">
          {/* Preset amounts */}
          <div className="flex justify-center gap-4">
            {[100, 250, 500].map((val) => (
              <button
                type="button"
                key={val}
                aria-required
                onClick={() => handleAmountClick(val)}
                className={`px-4 py-2 rounded-md border ${
                  amount === val
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

          <button
            type="submit"
            className="w-full bg-[#15B3B6] hover:bg-[#119CA0] text-white font-semibold py-2 rounded-md text-center"
          >
            Donate Now
          </button>
        </form>

  );
};
export default Success;
