import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import hours from '../images/Hours Spent.png'

export default function Example({ data }) {
  const iconMap = {
    'CloudArrowUpIcon': CloudArrowUpIcon,
    'LockClosedIcon': LockClosedIcon,
    'ServerIcon': ServerIcon,
  };

  return (
    <div className="bg-[#E14242] py-24">
      <div className="mx-auto max-w-7xl  ">
        <div className="relative isolate overflow-hidden bg-[#E14242] px-6 py-20  sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {data.heading}
                <br />
                
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {data.description}
              </p>
            </div>
            <Image
              alt="Product screenshot"
              src={hours}
              width={2432}
              height={1442}
              className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
            />
            <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
              <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {data.serviceArray && data.serviceArray.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon] || CloudArrowUpIcon;
                  return (
                    <div key={index} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <IconComponent aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-white" />
                        {feature.title}
                      </dt>
                      <dd className="inline"> <br/>{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
          >
            
          </div>
        </div>
      </div>
    </div>
  )
}
