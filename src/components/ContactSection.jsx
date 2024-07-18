import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection({contactData}) {
  return (
      <FadeIn className="-mx-6 bg-[#e14242] px-6 py-20 sm:mx-0 sm:py-32 md:px-2">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
             {contactData.heading}
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
              {contactData.buttonText}
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
               {contactData.officeDetails.title}
              </h3>
              <Offices
                invert
                officeData={contactData.officeDetails.address}
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
  )
}
