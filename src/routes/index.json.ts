import { contentful } from '$lib/clients/contentful';


export async function get({ params }) {

	const [home, what, others, landing, mobile] = await Promise.all([
    contentful.getEntry('ZgZLynoQFBUeIKhfLEtO9', { include: 3 }),
    contentful.getEntry('7dKiHWkycwSEn4GwcSW5n0', { include: 3 }),
    contentful.getEntry('5pcTYMIIdraDHH9AYAEvqH', { include: 3 }),
    contentful.getAsset('6m1TD6XSGB4CLuiWPK1PHF'),
    contentful.getAsset('3ySCBDwofl4tK6LhBhnEnH')
  ])

  return {
    body: {
      home,
      what,
      others,
      landing,
      mobile
    }
  }
}