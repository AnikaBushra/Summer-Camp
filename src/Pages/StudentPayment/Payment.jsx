import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authporviders";
import { useParams } from "react-router-dom";

const Payment = () => {
    const { id } = useParams()
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)


    const { user } = useContext(AuthContext)
    const { data } = useQuery({
        queryKey: ['myClass', user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myClass?email=${user.email}`)
            return res.json()
        }

    })
    const product = data?.find(pd => pd._id === id)
    console.log(product);
    const price = product?.price;
    // const priceFloat = parseFloat(price?.toFixed(2))

    return (
        <div>
            <h3 className="text-4xl font-bold uppercase mb-20">Payment</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} />
            </Elements>
        </div>
    );
};

export default Payment;