"use client"
import React, { useId } from 'react'
import Link from 'next/link'
import { heroData,contactData } from '@/data/contactpage'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { sendContactForm } from '@/lib/api'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-[#e14242] ring-4 ring-transparent transition focus:border-[#e14242] focus:outline-none focus:ring-[#e14242]/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-[#e14242] peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-[#e14242]"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-[#e14242]/20 outline-none checked:border-[0.5rem] checked:border-[#e14242] focus-visible:ring-1 focus-visible:ring-[#e14242] focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-[#e14242]">{label}</span>
    </label>
  )
}

function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    sendContactForm(formData)
    // Add further actions here, like submitting the form data to a server
  };

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-[#e14242]">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" />
          <TextInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" />
          <TextInput label="Company" name="company" value={formData.company} onChange={handleChange} autoComplete="organization" />
          <TextInput label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" />
          <TextInput label="Message" name="message" value={formData.message} onChange={handleChange} />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$25K – $50K" name="budget" value="25" onChange={handleChange} checked={formData.budget === '25'} />
                <RadioInput label="$50K – $100K" name="budget" value="50" onChange={handleChange} checked={formData.budget === '50'} />
                <RadioInput label="$100K – $150K" name="budget" value="100" onChange={handleChange} checked={formData.budget === '100'} />
                <RadioInput label="More than $150K" name="budget" value="150" onChange={handleChange} checked={formData.budget === '150'} />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
}


function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-[#e14242]">
        {contactData.title}
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        {contactData.description}
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-[#e14242]">
          {contactData.emailSection.title}
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
        {contactData.emailSection.contacts.map(({ label, email }) => (
            <div key={email}>
              <dt className="font-semibold text-[#e14242]">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-[#e14242]"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-[#e14242]">
        {contactData.followUsSection.title}
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

const metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow={heroData.eyebrow} title={heroData.title}>
        <p>{heroData.desc}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
