// "use client"
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
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'

async function SeperateWork({ params }) {
  const caseStudy = await getSanityData(params.slug)
  // console.log(caseStudy,666)

  return (
    <>
      <article className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 lg:mt-40">
        <PageIntro eyebrow="Case Study" title={caseStudy.title} centered>
          <p>{caseStudy.description}</p>
        </PageIntro>

        <FadeIn>
          <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
            <Container>
              <div className="mx-auto max-w-5xl">
                <dl className="-mx-6 grid grid-cols-1 text-sm text-[#e14242] sm:mx-0 sm:grid-cols-3">
                  <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                    <dt className="font-semibold">Client</dt>
                    <dd>{caseStudy?.client}</dd>
                  </div>
                  <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                    <dt className="font-semibold">Year</dt>
                    <dd>
                      {/* <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time> */}
                    </dd>
                  </div>
                  <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                    <dt className="font-semibold">Service</dt>
                    <dd>{caseStudy?.service}</dd>
                  </div>
                </dl>
              </div>
            </Container>
          </div>

          <div className="border-y border-neutral-200 bg-neutral-100">
            <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
              {/* <GrayscaleTransitionImage
              {...urlFor(caseStudy.image).url()}
              quality={90}
              className="w-full"
              sizes="(min-width: 1216px) 76rem, 100vw"
              priority
            /> */}
              <Image
                className="pointer-events-none  w-full  transition duration-300 group-hover:opacity-100"
                aria-hidden="true"
                src={urlFor(caseStudy?.image).url()}
                width={100}
                height={100}
              />
            </div>
          </div>
        </FadeIn>
        <div>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            {renderRichText(caseStudy.richTextContent)}
          </div>
        </div>

        <div>
          <TagList className={clsx('my-6', '')}>
            {caseStudy?.tags &&
              caseStudy.tags.map((tag) => <TagListItem>{tag}</TagListItem>)}
          </TagList>
        </div>
        <div>
     {   caseStudy?.testimonial?.image &&  <Blockquote
            author={caseStudy?.testimonial?.author}
            authorRole={caseStudy?.testimonial?.authorRole}
            image={urlFor(caseStudy?.testimonial?.image).url()}
            className="mt-12"
          >
            {caseStudy.testimonial.content}
          </Blockquote>}
        </div>

        <StatList className={clsx('my-32 !max-w-none', '')}>
          {caseStudy?.statlist &&
            caseStudy.statlist.map((item) => (
              <StatListItem
                key={item._key}
                label={item.label}
                value={item.value}
              />
            ))}
        </StatList>
      </article>
      <ContactSection contactData={contactData} />
    </>
  )
}

export default SeperateWork

async function getSanityData(slug) {
  console.log(slug, 'slug from seperate page')
  const clientData = await getPosts('work')
  // console.log(clientData[0].workArray, 'work page client slug')
  const getData = clientData[0].workArray.find(
    (post) => post.slug.current === slug,
  )
  const data = await getData
  console.log(getData)
  return data
}

// async function getSanityData() {
//   const clientData = getPosts('work')

//   const data = await clientData
//    console.log(data,2)
//   return data
// }

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
                <span key={span._key} className={marks}>
                  {span.text}
                </span>
              )
            })}
          </p>
        )
      case 'span':
        // Handle span block separately
        return (
          <span key={block._key} className={`text-${block.style}`}>
            {block.text}
          </span>
        )
      // Add more cases for other block types if necessary
      default:
        return null
    }
  })
}
