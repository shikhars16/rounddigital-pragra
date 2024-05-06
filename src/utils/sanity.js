import {createClient} from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: '33cjhm4h',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2024-05-02', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

  
// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts(type) {

    try {
        const posts = await client.fetch(`*[_type == "${type}"]`);
        return posts;
    } catch (error) {
        console.error("Error fetching posts from Sanity:", error);
        throw error;
    }
  }
  
  export async function createPost(post) {
    const result = client.create(post)
    return result
  }
  
  export async function updateDocumentTitle(_id, title) {
    const result = client.patch(_id).set({title})
    return result
  }


  const builder = ImageUrlBuilder(client)

  export function urlFor(source){
    return builder.image(source)
  }