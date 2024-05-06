import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { contactData } from '@/data/homepage'
import {
  heroData,
  discoverData,
  buildData,
  deliverData,
  valuesData,
} from '@/data/processpage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { getPosts } from '@/utils/sanity'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              image={image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-[#e14242] after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[#e14242] sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover({data}) {
  return (
    <Section title={data.title} image={data.imageUrl}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{data.DescOne}</p>
        <p>{data.DescTwo}</p>
        <p>{data.DescThree}</p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-[#e14242]">
        {data.phase.heading}
      </h3>
      <TagList className="mt-4">
        {data?.phase?.tag &&
          data?.phase?.tag.map((item) => (
            <TagListItem key={item.id}>{item.point}</TagListItem>
          ))}
      </TagList>
    </Section>
  )
}

function Build({data}) {
  return (
    <Section title={data.title} image={data.imageUrl}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{data.DescOne}</p>
        <p>{data.DescTwo}</p>
        <p>{data.DescThree}</p>
      </div>

      <Blockquote
        author={{ name: data.author.name, role: data.author.role }}
        className="mt-12"
      >
        {data.author.desc}
      </Blockquote>
    </Section>
  )
}

function Deliver({data}) {
  return (
    <Section title={data.title} image={data.imageUrl}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{data.DescOne}</p>
        <p>{data.DescTwo}</p>
        <p>{data.DescThree}</p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-[#e14242]">
        {data.phase.heading}
      </h3>
      <List className="mt-8">
        {data?.phase?.tag &&
          data?.phase?.tag.map((item) => (
            <ListItem key={item.id} title={item.title}>
              {item.point}
            </ListItem>
          ))}
      </List>
    </Section>
  )
}

function Values({data}) {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      {/* Assuming you have a GridPattern component */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        {/* Assuming you have a GridPattern component */}
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-[#e14242]/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow={data.eyebrow} title={data.title}>
        <p>{data.DescOne}</p>
      </SectionIntro>

      {/* Assuming you have a Container component */}
      <Container className="mt-24">
        <GridList>
          {data.phase.tag.map((item) => (
            <GridListItem key={item.id} title={item.title}>
              {item.point}
            </GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Process() {
  const clientData = await getSanityData()
  console.log(clientData[0],"process data")
  return (
    <>
      <PageIntro eyebrow={clientData[0].heroDataComponent.eyebrow} title={clientData[0].heroDataComponent.title}>
        <p>{clientData[0].heroDataComponent.subHeading}</p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover data={clientData[0].discoverDataComponent} />
        <Build data={clientData[0].buildDataComponent}/>
        <Deliver data={clientData[0].deliverDataComponent} />
      </div>

      <Values data={clientData[0].valuesDataComponent} />

      <ContactSection contactData={contactData} />
    </>
  )
}


async function getSanityData() {
  const clientData = getPosts('process')

  const data = await clientData
  //  console.log(data)
  return data
}