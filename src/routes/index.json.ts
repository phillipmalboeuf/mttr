import { contentful } from '$lib/clients/contentful';


export async function get({ params }) {

	const page = await contentful.getEntry('ZgZLynoQFBUeIKhfLEtO9')

  return {
    body: {
      page
    }
  }
}