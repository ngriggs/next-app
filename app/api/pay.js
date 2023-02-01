import { Client } from "square";
const { paymentsApi } = new Client({
	accessToken: process.env.SANDBOX_SQUARE_ACCESS_TOKEN,
	environment: "sandbox",
});
BigInt.prototype.toJSON = function () {
	return this.toString();
};
export default async function handler(req, res) {
	if (req.method === "POST") {
		const { result } = await paymentsApi.createPayment({
			idempotencyKey: randomUUID(),
			sourceId: req.body.sourceId,
			amountMoney: {
				currency: "USD",
				amount: 100,
			},
		});
		console.log(result);
		res.status(200).json(result);
	} else {
		res.status(500).send();
	}
}
