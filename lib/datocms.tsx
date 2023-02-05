import { GraphQLClient } from "graphql-request";

export { gql } from "graphql-request";

export const datocms = new GraphQLClient(
	process.env.DATOCMS_API_URL as string,
	{
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
		},
	}
);
