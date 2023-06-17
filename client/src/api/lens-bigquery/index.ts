import { BigQuery } from '@google-cloud/bigquery'
const keyFilename = './keyfile.json'

// @ts-ignore
export async function POST(req, res) {
  try {
    const { profileId } = await req.json()
    console.log('profileId: ', profileId)
    const client = new BigQuery({
      keyFilename
    })
    const query = `
    SELECT p.profile_id, p.handle, p.profile_picture_s3_url, p.name, p.owned_by,
    fpd.total_followers
    FROM \`lens-public-data.polygon.public_follower\` AS f
    INNER JOIN \`lens-public-data.polygon.public_profile\` AS p ON p.owned_by = f.address
    INNER JOIN \`lens-public-data.polygon.public_follower_profile_data\` AS fpd ON fpd.profile_id = p.profile_id
    WHERE f.follow_profile_id = '${profileId}'
    ORDER BY fpd.total_followers DESC
    LIMIT 50
    `
  
    const options = {
      query: query,
      location: 'US',
    }
  
    const [rows] = await client.query(options)
    console.log('rows:', rows)
    return res.json({ data: rows });

  } catch (err) {
    console.log('err...:', err)
    return res.json({ error: 'error ...' });

  }
}