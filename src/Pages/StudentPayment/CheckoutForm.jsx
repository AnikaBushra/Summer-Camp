import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authporviders";

const CheckoutForm = ({ price, product }) => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    console.log(price);

    useEffect(() => {
        fetch("https://summer-camp-server-lac-ten.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("client secret", data.clientSecret);
                setClientSecret(data.clientSecret)
            });
    }, [])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log("error", error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            // console.log('payment method', paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)
        console.log(paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // payment info save in the server 
            const payment = {
                email: user?.email, transactionId: paymentIntent.id,
                price,
                items: product._id,
                courseName: product.courseName,

            }
            fetch(`https://summer-camp-server-lac-ten.vercel.app/payments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        // sss 
                    }
                })
            // paid class deleted from cart 
            fetch(`https://summer-camp-server-lac-ten.vercel.app/myClass/${product._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
            // paid class show in enrolled class 

            fetch(`https://summer-camp-server-lac-ten.vercel.app/enrolled`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        // sss 
                    }
                })
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="w-96 p-4 rounded bg-green-300 text-white">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-primary m-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-700">Transaction complete with Transaction id{transactionId}</p>
            }
        </div>
    );
};

export default CheckoutForm;