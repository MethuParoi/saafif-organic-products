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
            toast.success("Order Placed!");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={onSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">Order Details</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="house"
                    placeholder="House"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="area"
                    placeholder="Area"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="police_station"
                    placeholder="Police Station"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="district"
                    placeholder="District"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="zip_code"
                    placeholder="Zip Code (optional)"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Place Order
                </button>
            </form>
            <span className="block mt-4 text-center text-gray-700">{result}</span>
        </div>
    );
}







// import React from "react";

// export default function Contact({ cartData }) {
//     const [result, setResult] = React.useState("");

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         setResult("Sending....");
//         const formData = new FormData(event.target);

//         formData.append("access_key", process.env.WEB3_FORMS_ACCESS_KEY);
//         formData.append("cart_data", JSON.stringify(cartData));

//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData,
//         });

//         const data = await response.json();

//         if (data.success) {
//             setResult("Order Submitted Successfully");
//             event.target.reset();
//         } else {
//             console.log("Error", data);
//             setResult(data.message);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input type="text" name="name" placeholder="Name" required />
//                 <input type="tel" name="phone" placeholder="Phone Number" required />
//                 <input type="email" name="email" placeholder="Email (optional)" />
//                 <textarea name="address" placeholder="Address (House, Area, Police Station, District, Zip Code (optional))" required></textarea>

//                 <button type="submit">Place Order</button>
//             </form>
//             <span>{result}</span>
//         </div>
//     );
// }
