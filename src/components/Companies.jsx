import next from "next"
import Image from 'next/image'
import { client, getPosts, urlFor } from '@/utils/sanity'


export default function Company({ clients }) {
  return (
    <div className="bg-[#e14242]  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white">{clients.heading}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a href="#" className="text-sm font-semibold text-white">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
          {clients?.clientsArray &&
              clients.clientsArray.map((item) => (
                <li key={item.key}>
                  
                    <Image
                      src={urlFor(item?.image).url()}
                      alt={item.name}
                      unoptimized
                      width={150}
                      height={75}
                    />
                  
                </li>
              ))}
</div>

        </div>
      </div>
    </div>
  )
}
