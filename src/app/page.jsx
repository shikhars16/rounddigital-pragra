import Image from 'next/image'
import Link from 'next/link'
import {heroData, clientData, caseStudiesData, testimonialData, servicesData, contactData} from '@/data/homepage'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'

import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { client, getPosts, urlFor } from '@/utils/sanity'
// import { useEffect } from 'react'


function Clients({clients}) {
  return (
    <div className="mt-24 rounded-4xl bg-[#e14242] py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          {clients?.heading && <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
           {clients.heading}
          </h2>}
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients?.clientsArray && clients.clientsArray.map((item) => (
              <li key={item.key}>
                <FadeIn>
                  <Image src={urlFor(item?.image).url()} alt={item.name} unoptimized width={200} height={100}/>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title={caseStudiesData?.heading ? caseStudiesData.heading :"Harnessing technology for a brighter future"}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        {caseStudiesData?.description  && <p>
           {caseStudiesData.description}
        </p>}
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-[#e14242]/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-[#e14242]">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-[#e14242]">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow={servicesData.eyebrow}
        title={servicesData.heading}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
         {servicesData.description}
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
           
           {servicesData?.listData && servicesData.listData.map((item,index) => (
             <ListItem key={index} title={item.title}>
              {item.description}
             </ListItem>
           ))}
            
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home({props}) {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)


  const clientData =await getSanityData()
  console.log(clientData[0].clients, 'client data from sanity')


  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          {heroData?.heading && <h1 className="font-display text-5xl font-medium tracking-tight text-[#e14242] [text-wrap:balance] sm:text-7xl">
            {heroData.heading}
          </h1>}
          {heroData?.description && <p className="mt-6 text-xl text-neutral-600">
            {heroData.description}
            </p>}
        </FadeIn>
      </Container>

      <Clients clients={clientData[0].clients}/>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: testimonialData.name, logo: testimonialData.logo }}
      >
      {testimonialData.quote}
      </Testimonial>

      <Services />

      <ContactSection contactData={contactData} />
    </>
  )
}


async function getSanityData() {
  const clientData = getPosts("home")

 const data = await clientData
//  console.log(data)
  return data;
 
}