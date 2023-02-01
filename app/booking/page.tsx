"use client";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
const applicationId = process.env.SANDBOX_SQUARE_APPLICATION_ID;

export default function Home() {
	return (
		<div className="">
			<PaymentForm
				applicationId="sandbox-sq0idb-LOb4-pgjgBtUM_2D0APPGw"
				cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
					const response = await fetch("/api/payments", {
						method: "POST",
						headers: {
							"Content-type": "application/json",
						},
						body: JSON.stringify({
							sourceId: token.token,
						}),
					});
					console.log(await response.json());
				}}
				locationId="LTWWCHJG269HD"
				createPaymentRequest={() => ({
					countryCode: "US",
					currencyCode: "USD",
					total: {
						amount: "1.00",
						label: "Total",
					},
				})}
			>
				<CreditCard />
			</PaymentForm>
		</div>
	);
}
