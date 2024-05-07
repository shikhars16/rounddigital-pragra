import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'
import { contactData } from '@/data/homepage'
import { getPosts, urlFor } from '@/utils/sanity'

// export const metadata = {
//   title: 'Blog',
//   description:
//     'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
// }

export default async function Blog() {
  const clientData = await getSanityData()

  return (
    <>
      <PageIntro
        eyebrow={clientData[0]?.heroDataComponent?.heading}
        title={clientData[0]?.heroDataComponent?.title}
      >
        <p>{clientData[0]?.heroDataComponent?.Desc}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {clientData[0].blogArray &&
            clientData[0].blogArray.map((article) => (
              <FadeIn key={article.slug}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <h2 className="font-display text-2xl font-semibold text-[#e14242]">
                          <Link href={`/blog/${article.slug.current}`}>
                            {article.title}
                          </Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 text-sm text-[#e14242] lg:static">
                            <time dateTime={article.date}>
                              {formatDate(article.date)}
                            </time>
                          </dd>
                          <dt className="sr-only">Author</dt>
                          <dd className="mt-6 flex gap-x-4">
                            <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                              <Image
                                alt=""
                                src={urlFor(article?.testimonial?.image).url()}
                                className="h-12 w-12 object-cover grayscale"
                                width={80}
                                height={80}
                              />
                            </div>
                            <div className="text-sm text-[#e14242]">
                              <div className="font-semibold">
                                {article?.testimonial?.author}
                              </div>
                              <div>{article?.testimonial?.authorRole}</div>
                            </div>
                          </dd>
                        </dl>
                        <p className="mt-6 max-w-2xl text-base text-neutral-600">
                          {article?.description}
                        </p>
                        <Button
                          href={`/blog/${article.slug.current}`}
                          aria-label={`Read more: ${article.title}`}
                          className="mt-8"
                        >
                          Read more
                        </Button>
                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            ))}
        </div>
      </Container>

      <ContactSection contactData={contactData} />
    </>
  )
}
async function getSanityData() {
  const clientData = getPosts('blogs')

  const data = await clientData
  console.log(data[0], 1)
  return data
}
