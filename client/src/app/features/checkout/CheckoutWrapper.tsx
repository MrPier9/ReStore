import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import agent from "../../api/agent";
import LoadingComponent from "../../layout/LoadingComponent";
import { useAppDispatch } from "../../store/configureStore";
import { setBasket } from "../basket/basketSlice";
import CheckoutPage from "./CheckOutPage";

var stripePromise = loadStripe('pk_test_51MGJQyDPcKejRK1OscNPf6yGtx7AKk3hTXwVtFM6BmTe9M9BuKGvXqZMlA5CMW7eKrnP9xTqcLsx3PyN7yEjYzc700ccY6rwhY');

export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [dispatch]);

    if (loading) return <LoadingComponent message="Loading checkout..." />

    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}