export async function getAllArticles() {
	try {
		const headers = {
			"content-type": "application/json",
			Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
		};
		const requestBody = {
			query: `
			query getAllArticles {
				allArticles {
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
				  authorimage {
					url
				  }
				  description
				}
				_allArticlesMeta {
				  count
				}
			  }
			  
			`,
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
}
