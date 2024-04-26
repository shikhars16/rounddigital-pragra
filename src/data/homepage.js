import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'

const heroData = {
    heading: `Delivering top-notch Solutions to enhance your business.`,
    description: `We recognize the utmost importance of product quality for both businesses and consumers. Our meticulously crafted test suites offer comprehensive insights and coverage for all quality-related endeavors.`,
}

const clientData = {
    heading: `We've worked with hundreds of amazing people`,
    clientArray : [
        ['Phobia', logoPhobiaLight],
        ['Family Fund', logoFamilyFund],
        ['Unseal', logoUnseal],
        ['Mail Smirk', logoMailSmirk],
        ['Home Work', logoHomeWork],
        ['Green Life', logoGreenLife],
        ['Bright Path', logoBrightPath],
        ['North Adventures', logoNorthAdventures],
    ]
}

const caseStudiesData = {
    heading: `Harnessing technology for a brighter future`,
    description: ` We believe technology is the answer to the world’s greatest
    challenges. It’s also the cause, so we find ourselves in bit of a
    catch 22 situation.`
}

const testimonialData = {
    quote:`The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs.`,
    name: 'Phobia', logo: logoPhobiaDark
}

const servicesData = {
    eyebrow: 'Services',
    heading:`We help you identify, explore and respond to new opportunities.`,
    description: ` As long as those opportunities involve giving us money to re-purpose
    old projects — we can come up with an endless number of those.`,
    listData : [
        {
            title: 'Web Development',
            description: `We specialise in crafting beautiful, high quality marketing pages.
            The rest of the website will be a shell that uses lorem ipsum
            everywhere.`
        },
        {
            title: 'Application Development',
            description: `We have a team of skilled developers who are experts in the latest app frameworks, like Angular 1 and Google Web Toolkit.`
        },
        {
            title: 'E-commerce',
            description: `We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we’ve used for the past six years`
        }, 
        {
            title: 'Custom content management',
            description: `At Studio we understand the importance of having a robust and customised CMS. That’s why we run all of our client projects out of a single, enormous Joomla instance.`
        }
    ]
}

const contactData = {
    heading: `Tell us about your project need`,
    buttonText: `Contact Us`,
    officeDetails: {
        title: 'Our offices',
        address: [
            {
                name: 'Curlify',
              address1: `  1 Carlsberg Gate`,
              address2: `1260, Ontario`,
               country: 'Canada'
            },
            {
                name: 'Bullino',
                address1: `  2 Carlsberg Gate`,
                address2: `1260, Ontario`,
                 country: 'Canada'
              }
        ]
    }
}

export {heroData, clientData, caseStudiesData, testimonialData, servicesData, contactData}