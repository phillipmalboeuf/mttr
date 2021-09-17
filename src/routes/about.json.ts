import { contentful } from '$lib/clients/contentful';


export async function get({ params }) {

	const page = await contentful.getEntry('4Fgmxu1zc68BJqrQA7Fszu', { include: 3 })

  return {
    body: {
      page
    }
  }
}