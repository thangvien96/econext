import BreadCrumArea from "../components/BreadcrumbArea";
import BillingDetail from "../components/checkout/BillingDetail";
import FormCheckOut from "../components/checkout/FormCheckout";

const CheckoutPage = () => {
    return (
        <>
            <BreadCrumArea title="Thanh toán" />

            <div className="checkout-area pt-100px pb-100px">
                <div className="container">
                    <BillingDetail />
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;