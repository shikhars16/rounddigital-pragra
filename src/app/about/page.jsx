import Image from 'next/image'
import { heroData, stats, cultureData, teamData } from '@/data/aboutpage'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { contactData } from '@/data/homepage'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-[#e14242] py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow={cultureData.title}
        title={cultureData.heading}
        invert
      >
        <p>{cultureData.subHeading}</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {cultureData.point.map((item) => (
            <GridListItem key={item.id} title={item.title} invert>
              {item.desc}
            </GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  )
}

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {teamData.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-[#e14242]">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.data.map((person) => (
                    <li key={person.id}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            src={person.image.src}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}


export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow={heroData.title} title={heroData.heading}>
        <p>{heroData.subHeading}</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>{heroData.DescOne}</p>
          <p>{heroData.DescTwo}</p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          {stats.map((stat) => (
            <StatListItem key={stat.id} value={stat.value} label={stat.desc} />
          ))}
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection contactData={contactData} />
    </>
  )
}
