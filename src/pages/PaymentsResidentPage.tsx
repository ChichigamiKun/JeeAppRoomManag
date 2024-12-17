// import { useState } from 'react';

export default function PaymentsResidentPage() {
    // State for new payment form
    //   const [newPayment, setNewPayment] = useState({
    //     resident: '',
    //     room: '',
    //     amount: '',
    //     date: '',
    //     method: '',
    //     cardNumber: '',
    //     cardExpiration: '',
    //     cardCVV: '',
    //     bankAccount: '',
    //   });

    //   const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewPayment({ ...newPayment, [name]: value });
    //   };

    //   const handleMethodChange = (e) => {
    //     const { value } = e.target;
    //     setNewPayment({ ...newPayment, method: value });
    //   };

    //   const addPayment = (e) => {
    //     e.preventDefault();
    //     console.log('Payment added:', newPayment);
    //     setNewPayment({
    //       resident: '',
    //       room: '',
    //       amount: '',
    //       date: '',
    //       method: '',
    //       cardNumber: '',
    //       cardExpiration: '',
    //       cardCVV: '',
    //       bankAccount: '',
    //     });
    //   };

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-10">Payments</h1>
            <div className="bg-slate-200 p-6 rounded-lg shadow-lg shadow-gray-800 py-3">
                <h1 className="text-lg font-semibold mb-4">Add Payment</h1>
                <form
                // onSubmit={addPayment}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700">Resident</label>
                            <input
                                type="text"
                                name="resident"
                                // value={newPayment.resident}
                                // onChange={handleInputChange}
                                className="mt-3 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">Room</label>
                            <input
                                type="number"
                                name="room"
                                // value={newPayment.room}
                                // onChange={handleInputChange}
                                className="mt-3 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">Amount</label>
                            <input
                                type="number"
                                name="amount"
                                // value={newPayment.amount}
                                // onChange={handleInputChange}
                                className="mt-3 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">Date</label>
                            <input
                                type="date"
                                name="date"
                                // value={newPayment.date}
                                // onChange={handleInputChange}
                                className="mt-3 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700">Method</label>
                            <select
                                name="method"
                                // value={newPayment.method}
                                // onChange={handleMethodChange}
                                className="mt-3 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            >
                                <option value="">Select</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Cash">Cash</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                            </select>
                        </div>

                        {/* Conditional Fields for Credit Card */}
                        {/* {newPayment.method === 'Credit Card' && (
              <> */}
                        <div>
                            <label className="block text-sm font-bold  text-gray-700">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                // value={newPayment.cardNumber}
                                // onChange={handleInputChange}
                                className="mt-3 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">Expiration Date</label>
                            <input
                                type="month"
                                name="cardExpiration"
                                // value={newPayment.cardExpiration}
                                // onChange={handleInputChange}
                                className="mt-3 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">CVV</label>
                            <input
                                type="text"
                                name="cardCVV"
                                // value={newPayment.cardCVV}
                                // onChange={handleInputChange}
                                className="mt-3 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        {/* </>
            )} */}

                        {/* Conditional Fields for Bank Transfer */}
                        {/* {newPayment.method === 'Bank Transfer' && ( */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700">Bank Account Number</label>
                            <input
                                type="text"
                                name="bankAccount"
                                //   value={newPayment.bankAccount}
                                //   onChange={handleInputChange}
                                className="mt-3 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        {/* )} */}
                    </div>

                    {/* Submit Button - Centered */}
                    <div className="mt-8 mb-8 text-center">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
                        >
                            Add Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
