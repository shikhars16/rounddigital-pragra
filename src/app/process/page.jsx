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

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
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

function Discover() {
  return (
    <Section title={discoverData.title} image={discoverData.image}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{discoverData.DescOne}</p>
        <p>{discoverData.DescTwo}</p>
        <p>{discoverData.DescThree}</p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-[#e14242]">
        {discoverData.phase.heading}
      </h3>
      <TagList className="mt-4">
        {discoverData?.phase?.tag &&
          discoverData?.phase?.tag.map((item) => (
            <TagListItem key={item.id}>{item.point}</TagListItem>
          ))}
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title={buildData.title} image={buildData.image}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{buildData.DescOne}</p>
        <p>{buildData.DescTwo}</p>
        <p>{buildData.DescThree}</p>
      </div>

      <Blockquote
        author={{ name: buildData.author.name, role: buildData.author.role }}
        className="mt-12"
      >
        {buildData.author.desc}
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title={deliverData.title} image={deliverData.image}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{deliverData.DescOne}</p>
        <p>{deliverData.DescTwo}</p>
        <p>{deliverData.DescThree}</p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-[#e14242]">
        {deliverData.phase.heading}
      </h3>
      <List className="mt-8">
        {deliverData?.phase?.tag &&
          deliverData?.phase?.tag.map((item) => (
            <ListItem key={item.id} title={item.title}>
              {item.point}
            </ListItem>
          ))}
      </List>
    </Section>
  )
}

function Values() {
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

      <SectionIntro eyebrow={valuesData.eyebrow} title={valuesData.title}>
        <p>{valuesData.DescOne}</p>
      </SectionIntro>

      {/* Assuming you have a Container component */}
      <Container className="mt-24">
        <GridList>
          {valuesData.phase.tag.map((item) => (
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

export default function Process() {
  return (
    <>
      <PageIntro eyebrow={heroData.eyebrow} title={heroData.title}>
        <p>{heroData.subHeading}</p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection contactData={contactData} />
    </>
  )
}
