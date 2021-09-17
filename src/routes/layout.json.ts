import { contentful } from '$lib/clients/contentful';


export async function get({ params }) {

	const media = await contentful.getAsset('2QJKwDBcTATQQxaYReu5j1')

  return {
    body: {
      media
    }
  }
}