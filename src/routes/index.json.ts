import { contentful } from '$lib/clients/contentful';


export async function get({ params }) {

	const home = await contentful.getEntry('ZgZLynoQFBUeIKhfLEtO9', { include: 3 })
  const what = await contentful.getEntry('7dKiHWkycwSEn4GwcSW5n0', { include: 3 })
  const landing = await contentful.getAsset('6m1TD6XSGB4CLuiWPK1PHF')

  return {
    body: {
      home,
      what,
      landing
    }
  }
}