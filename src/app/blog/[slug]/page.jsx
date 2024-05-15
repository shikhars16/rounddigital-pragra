import React from 'react'
import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { PageIntro } from '@/components/PageIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { TagList, TagListItem } from '@/components/TagList'
import { contactData } from '@/data/homepage'
import { getPosts, urlFor } from '@/utils/sanity'
import clsx from 'clsx'
import Image from 'next/image'

async function SeperateBlog({ params }) {
  const blog = await getSanityData(params.slug)
  return (
    <>
      <article className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 lg:mt-40">
     
        <PageIntro eyebrow="Blog" title={blog?.title} centered>
        <span>
              { blog.image &&  <Image className='w-auto m-auto my-4 lg:w-72 xl:w-96 rounded-lg' src={urlFor(blog.image).url()} width={100} height={60} alt=""/>}
            </span>
          <p>{blog?.description}</p>
        </PageIntro>
        <div>
            <span>
              { blog.image2 &&  <Image className='w-auto m-auto my-4 lg:w-72 xl:w-96 rounded-lg' src={urlFor(blog.image2).url()} width={100} height={60} alt=""/>}
            </span>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
            {renderRichText(blog.richTextContent)}
          </div>
          <span>
              { blog.image3 &&  <Image className='w-auto m-auto my-4 lg:w-72 xl:w-96 rounded-lg' src={urlFor(blog.image3).url()} width={100} height={60} alt=""/>}
            </span>
        </div>
      </article>
    </>
  )
}

export default SeperateBlog

async function getSanityData(slug) {
//   console.log(slug, 'slug from seperate page')
  const clientData = await getPosts('blogs')
  // console.log(clientData[0].workArray, 'work page client slug')
  const getData = clientData[0].blogArray.find(
    (post) => post.slug.current === slug,
  )
  const data = await getData
  console.log(data, 222)
  return data
}




const renderRichText = (richTextContent) => {
    return richTextContent.map((block) => {
      switch (block._type) {
        case 'block':
          return (
            <p key={block._key} className={`text-${block.style}`}>
              {block.children.map((span) => {
                // Handle marks if any
                const marks = span.marks.join(' ')
  
                return (
                  <span key={span._key} className={`${block.style == 'h2'? 'text-bold text-2xl' : block.style == 'h2'? 'text-bold text-2xl' : 'text-normal'}`}>
                    {span.text}
                  </span>
                )
              })}
            </p>
          )
        case 'span':
          // Handle span block separately
          return (
            <span key={block._key} className={`${block.style == 'h2'? 'text-bold text-2xl border border-blue-700' : block.style == 'h2'? 'text-bold text-2xl' : 'text-normal'}`}>
              {block.text}
            </span>
          )
        // Add more cases for other block types if necessary
        default:
          return null
      }
    })
  }