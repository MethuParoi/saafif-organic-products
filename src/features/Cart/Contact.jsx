import React from "react";
import toast from "react-hot-toast";

export default function Contact({ cartData }) {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        toast.loading("Ordering....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7b17ccac-63e9-48c3-8f38-7d2c080a5cb5");
        formData.append("cart_data", JSON.stringify(cartData, null, 2));

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            toast.remove();
            toast.success("Order Placed!");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
        }
    };

    return (
        <div className="flex flex-col justify-center my-10 py-6 ">
            <form onSubmit={onSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-primary mb-4">Address & Contact</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-850">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-lg font-medium text-gray-850">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+880 163 123 4567"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-850">Email (optional)</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-lg font-medium text-gray-850">Address</label>
                        <textarea
                            name="address"
                            placeholder=" House No, Street Address, Area"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-lg font-medium text-gray-850">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label htmlFor="district" className="block text-lg font-medium text-gray-850">District</label>
                        <input
                            type="text"
                            name="district"
                            placeholder="District"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                </div>

                <div className="text-center mt-6">
                    <button
                        type="submit"
                        className="text-white text-md font-semibold bg-primary hover:bg-primaryHover px-4 py-3 rounded-3xl"
                    >
                        Place Order
                    </button>
                </div>
            </form>
            <span className="block mt-4 text-center text-gray-700">{result}</span>
        </div >
    );
}