"use client"
import React, { useId } from 'react'
import Link from 'next/link'
import { heroData, contactData } from '@/data/contactpage'
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

function ContactForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
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
    sendContactForm(formData);
    // Add further actions here, like submitting the form data to a server
  };

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between text-sm leading-6">
              <label htmlFor="phone" className="block font-semibold text-gray-900">
                Phone
              </label>
              <p id="phone-description" className="text-gray-400">
                Optional
              </p>
            </div>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                aria-describedby="phone-description"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between text-sm leading-6">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                How can we help you?
              </label>
              <p id="message-description" className="text-gray-400">
                Max 500 characters
              </p>
            </div>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                aria-describedby="message-description"
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <fieldset className="sm:col-span-2">
            <legend className="block text-sm font-semibold leading-6 text-gray-900">Expected budget</legend>
            <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
              <div className="flex gap-x-2.5">
                <input
                  id="budget-under-25k"
                  name="budget"
                  value="under_25k"
                  type="radio"
                  checked={formData.budget === 'under_25k'}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                />
                <label htmlFor="budget-under-25k">Less than $25K</label>
              </div>
              <div className="flex gap-x-2.5">
                <input
                  id="budget-25k-50k"
                  name="budget"
                  value="25k-50k"
                  type="radio"
                  checked={formData.budget === '25k-50k'}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                />
                <label htmlFor="budget-25k-50k">$25K – $50K</label>
              </div>
              <div className="flex gap-x-2.5">
                <input
                  id="budget-50k-100k"
                  name="budget"
                  value="50k-100k"
                  type="radio"
                  checked={formData.budget === '50k-100k'}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                />
                <label htmlFor="budget-50k-100k">$50K – $100K</label>
              </div>
              <div className="flex gap-x-2.5">
                <input
                  id="budget-over-100k"
                  name="budget"
                  value="over_100k"
                  type="radio"
                  checked={formData.budget === 'over_100k'}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                />
                <label htmlFor="budget-over-100k">$100K+</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
          <Button type="submit" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Send message
          </Button>
        </div>
      </form>
    </FadeIn>
  );
}
function ImageDisplay() {
  return(
  <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          alt=""
        />
      </div>)
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
        <ImageDisplay/>
          <ContactForm />
         
        </div>
      </Container>
    </>
  )
}
