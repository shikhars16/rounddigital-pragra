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

export const heroData = {
  title: 'About us',
  heading: 'Our strength is collaboration',
  subHeading:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
  DescOne:
    'Studio was started by three friends who noticed that developer studios were charging clients double what an in-house team would cost. Since the beginning, we have been committed to doing things differently by charging triple instead.',
  DescTwo:
    'At Studio, we’re more than just colleagues — we’re a family. This means we pay very little and expect people to work late. We want our employees to bring their whole selves to work. In return, we just ask that they keep themselves there until at least 6:30pm.',
}

export const stats = [
  {
    id: 1,
    value: 35,
    desc: 'Underpaid employees',
  },
  {
    id: 2,
    value: 52,
    desc: 'Placated clients',
  },
  {
    id: 3,
    value: '$25M',
    desc: 'Invoices billed',
  },
]

export const cultureData = {
  title: 'Our culture',
  heading: 'Balance your passion with your passion for life.',
  subHeading:
    'We are a group of like-minded people who share the same core values.',
  point: [
    {
      id: 1,
      title: 'Loyalty.',
      desc: 'Our team has been with us since the beginning because none of them are allowed to have LinkedIn profiles.',
    },
    {
      id: 2,
      title: 'Trust.',
      desc: 'We don’t care when our team works just as long as they are working every waking second.',
    },
    {
      id: 3,
      title: 'Compassion.',
      desc: 'You never know what someone is going through at home and we make sure to never find out.',
    },
  ],
}

export const teamData = [
  {
    title: 'Leadership',
    data: [
      {
        id: 1,
        image: { src: imageLeslieAlexander },
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
      },
      {
        id: 2,
        image: { src: imageMichaelFoster },
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
      },
      {
        id: 3,
        image: { src: imageDriesVincent },
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
      },
    ],
  },
  {
    title: 'Team',
    data: [
      {
        id: 1,
        image: { src: imageChelseaHagon },
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
      },
      {
        id: 2,
        image: { src: imageEmmaDorsey },
        name: 'Emma Dorsey',
        role: 'Senior Designer',
      },
      {
        id: 3,
        image: { src: imageLeonardKrasner },
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
      },
      {
        id: 4,
        image: { src: imageBlakeReid },
        name: 'Blake Reid',
        role: 'Junior Copywriter',
      },
      {
        id: 5,
        image: { src: imageKathrynMurphy },
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
      },
      {
        id: 6,
        image: { src: imageWhitneyFrancis },
        name: 'Whitney Francis',
        role: 'Content Specialist',
      },
      {
        id: 7,
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        id: 8,
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        id: 9,
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]
