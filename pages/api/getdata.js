import mysql from "mysql2/promise";

export default async function handler(req, res) {
	const dbconnection = await mysql.createConnection({
		host: "localhost",
		user: "ngriggs",
		database: "giggllay_articles",
		password: `"${process.env.DB_PASSWORD}"`,
	});

	res.status(200).json({ name: "John Doe" });
}
