"use client"
import { getPosts } from '@/utils/sanity'
import { useRouter,useSearchParams  } from 'next/navigation';
import React, { useEffect, useState } from 'react'

 function SeperateWork () {

  // const clientData = getSanityData()
  // console.log(clientData)
//   const router = useRouter();
//   const searchParam = useSearchParams()
//   const param = searchParam.values()
// console.log(param)
//   const { slug } = 1;
//   const [postData, setPostData] = useState(null);


//   useEffect(() => {
//     async function fetchPostData() {
//       try {
//         const postData = await getPostBySlug(slug);
//         setPostData(postData);
//         console.log(postData);
//       } catch (error) {
//         console.error('Error fetching post:', error);
//       }
//     }

//     if (slug) {
//       fetchPostData();
//     }
//   }, [slug]);



  return (
    <div>
      {/* <div className="mt-6 space-y-6 text-base text-neutral-600">
  {renderRichText(caseStudy.richTextContent)}
</div> */}
    </div>
  )
}

export default SeperateWork

// async function getSanityData(slug) {
//   const clientData = getPosts("work")
//   console.log(clientData, 'work page client slug')
//   const getData = clientData.find(post => post.slug === slug);
//  const data = await getData
// //  console.log(data)
//   return data;
 
// }

const renderRichText = (richTextContent) => {
  return richTextContent.map((block) => {
    switch (block._type) {
      case 'block':
        return (
          <p key={block._key} className={`text-${block.style}`}>
            {block.children.map((span) => {
              // Handle marks if any
              const marks = span.marks.join(' ');

              return (
                <span key={span._key} className={marks}>
                  {span.text}
                </span>
              );
            })}
          </p>
        );
      // Add more cases for other block types if necessary
      default:
        return null;
    }
  });
};
