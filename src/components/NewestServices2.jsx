import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon, ServerIcon } from '@heroicons/react/24/outline'

export default function NewestServices2({ data }) {
  const icons = [ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon, ServerIcon];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.heading}
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {data.serviceArray && data.serviceArray.map((feature, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div key={index}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <IconComponent aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}
