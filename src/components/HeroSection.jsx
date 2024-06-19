"use client"
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import appSS from '../images/appSS.png'
import { applySourceDocuments } from '@sanity/client/csm'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="">
      

      <div className="relative isolate pt-2">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          
        </div>
        <div className="py-24 sm:py-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-4xl font-small tracking-tight text-[#e14242] [text-wrap:balance] sm:text-7xl">
              Delivering top-notch Solutions to enhance your business.
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
              We recognize the utmost importance of product quality for both businesses and consumers. Our meticulously crafted test suites offer comprehensive insights and coverage for all quality-related endeavors.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#E14344] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-[#E14344]">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <Image
              src={appSS}
              alt="App screenshot"
              width={2432}
              height={1442}
              className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
            />
          </div>
        </div>
      </div>
    </div>
  )
}