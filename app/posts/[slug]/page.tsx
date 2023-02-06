const getArticle = async (articleID: String) => {
	try {
		const headers = {
			"content-type": "application/json",
			Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
		};
		const requestBody = {
			query: `
			query MyQuery {
				allArticles(filter: {slug: {eq: $articleID}}) {
				  id
				  title
				  _status
				  content {
					blocks
					links
					value
				  }
				  slug
				  _createdAt
				  author
				  images {
					url
				  }
				}
			  }
			`,
			variables: { articleID },
		};
		const options = {
			method: "POST",
			headers,
			body: JSON.stringify(requestBody),
		};
		const response = await (
			await fetch(`${process.env.DATOCMS_API_URL}`, options)
		).json();
		console.log("RESPONSE FROM FETCH REQUEST", response?.data);
		return response.data;
	} catch (err) {
		console.log("ERROR DURING FETCH REQUEST", err);
	}
};

export default async function ArticlePage({ params }: any) {
	// const article = await getArticle(params.slug);
	// console.log(article);
	// const date = new Date(article._createdAt);

	// const router = useRouter();
	// const { slug } = router.query;

	// const article = await getArticle(params);
	// const date = new Date(article._createdAt);

	// console.log(article);

	return <div>loading...</div>;
}
