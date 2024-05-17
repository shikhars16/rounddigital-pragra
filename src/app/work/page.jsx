import Image from 'next/image'
import Link from 'next/link'
import { heroData, testimonial } from '@/data/workpage'
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'
import { contactData } from '@/data/homepage'
import { getPosts, getSanityContent, urlFor } from '@/utils/sanity'

function CaseStudies({ caseStudies }) {
  // console.log(caseStudies,112233)
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-[#e14242]">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy._key}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    {caseStudy?.logo && (
                      <Image
                        src={urlFor(caseStudy?.logo).url()}
                        alt=""
                        className="h-16 w-16 flex-none"
                        unoptimized
                        width={100}
                        height={100}
                      />
                    )}
                    <h3 className="mt-6 text-sm font-semibold text-[#e14242] sm:mt-0 lg:mt-8">
                      {caseStudy.heading}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-[#e14242] after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-[#e14242] lg:mt-2">
                      {caseStudy?.date && (
                        <time dateTime={caseStudy.date}>
                          {formatDate(caseStudy.date)}
                        </time>
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-[#e14242]">
                    <Link href={caseStudy.slug.current}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {/* // {caseStudy.summary.map((paragraph) => ( */}
                    <p key={caseStudy.summary}>{caseStudy.summary}</p>
                    {/* // ))} */}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={`/work/${caseStudy.slug.current}`}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy?.testimonial && (
                    <Blockquote
                      author={caseStudy?.testimonial?.author}
                      image={urlFor(caseStudy?.image).url()}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-[#e14242]">
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  // let caseStudies = await loadCaseStudies()
  const clientData = await getSanityData()

  // console.log(clientData[0], 'here is all work client id linst')

  return (
    <>
      <PageIntro
        eyebrow={clientData[0]?.heroDataComponent.title}
        title={clientData[0]?.heroDataComponent.heading}
      >
        <p>{clientData[0]?.heroDataComponent.Desc}</p>
      </PageIntro>

      <CaseStudies caseStudies={clientData[0].workArray} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mail Smirk', logo: logoMailSmirk }}
      >
        {clientData[0]?.testimonialComponent.heading}
      </Testimonial>

      <Clients />
      


      <ContactSection contactData={contactData} />
    </>
  )
}

async function getSanityData() {
  const clientData = getPosts('work')

  const data = await clientData
  //  console.log(data,2)
  return data
}

// async function graphqlQuery() {
//   const data = await getSanityContent({
//     query: `
//     query AllWorkData {
//       allWork {
//         _id
//         title
//         content {
//           ... on RichText {
//             _type
//             children {
//               ... on Span {
//                 text
//                 marks
//               }
//             }
//           }
//           ... on Image {
//             asset {
//               url
//             }
//           }
//         }
//       }
//     }
//     `,

//   });
//   return data;
// }
