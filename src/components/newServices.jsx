import { BriefcaseIcon, NewspaperIcon, PhoneIcon, ComputerDesktopIcon } from '@heroicons/react/20/solid'
import laptopBackground from '../images/laptopBackground.jpg'
import Image from 'next/image'

import { List, ListItem } from './List'

const cards = [
  {
    name: 'Web Development.',
    description: 'We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Application Development.',
    description: 'We have a team of skilled developers who are experts in the latest app frameworks, like Angular 1 and Google Web Toolkit.',
    icon: PhoneIcon,
  },
  {
    name: 'E-commerce.',
    description: 'We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we’ve used for the past six years',
    icon: BriefcaseIcon,
  },
  {
    name: 'Custom content management. ',
    description: 'At Studio we understand the importance of having a robust and customised CMS. That’s why we run all of our client projects out of a single, enormous Joomla instance.',
    icon: NewspaperIcon,
  }
]

export default function NewService({data}) {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <Image
        src={laptopBackground}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-3xl font-medium text-white sm:text-6xl">{data.heading}</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
          {data.description}          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 pt-3 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
        {data?.serviceArray &&
  data.serviceArray.map((item, index) => (
    <div key={item.name} className="flex gap-x-4 rounded-xl bg-white/60 p-6 ring-1 ring-inset ring-white/10">
      <div className="text-base leading-7">
        <h3 className="font-semibold text-neutral-700">{item.title}</h3>
        <p className="mt-2 text-neutral-600">{item.description}</p>
      </div>
    </div>
  ))}

        </div>
      </div>
    </div>
  )
}
