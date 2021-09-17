import { contentful } from '$lib/clients/contentful';


export async function get({ params }) {

	const page = await contentful.getEntry('2vbVY5xIH8tQUvjSKzk3JT', { include: 3 })

  return {
    body: {
      page
    }
  }
}