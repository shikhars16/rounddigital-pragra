import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

export const heroData = {
  eyebrow: 'Our process',
  title: 'How we work',
  subHeading:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients. The primary way we do that is by re-using the same five projects we’ve been developing for the past decade.',
}

export const discoverData = {
  title: 'Discover',
  image: { src: imageWhiteboard },
  DescOne:
    'We work closely with our clients to understand their needs and goals, embedding ourselves in their every day operations to understand what makes their business tick.',

  DescTwo:
    ' Our team of private investigators shadow the company director’s for several weeks while our account managers focus on going through their trash. Our senior security experts then perform social engineering hacks to gain access to their business accounts — handing that information over to our forensic accounting team.',

  DescThree:
    '  Once the full audit is complete, we report back with a comprehensive plan and, more importantly, a budget.',

  phase: {
    heading: 'Included in this phase',
    tag: [
      {
        id: 1,
        point: 'In-depth questionnaires',
      },
      {
        id: 2,
        point: 'Feasibility studies',
      },
      {
        id: 3,
        point: 'Blood samples',
      },
      {
        id: 4,
        point: 'Employee surveys',
      },
      {
        id: 5,
        point: 'Proofs-of-concept',
      },
      {
        id: 6,
        point: 'Forensic audit',
      },
    ],
  },
}

export const buildData = {
  title: 'Build',
  image: { src: imageLaptop, shape: 1 },
  DescOne:
    ' Based off of the discovery phase, we develop a comprehensive roadmap for each product and start working towards delivery. The roadmap is an intricately tangled mess of technical nonsense designed to drag the project out as long as possible.',

  DescTwo:
    'Each client is assigned a key account manager to keep lines of communication open and obscure the actual progress of the project. They act as a buffer between the client’s incessant nagging and the development team who are hard at work scouring open source projects for code to re-purpose.',

  DescThree:
    ' Our account managers are trained to only reply to client emails after 9pm, several days after the initial email. This reinforces the general aura that we are very busy and dissuades clients from asking for changes.',
  author: {
    name: 'Debra Fiscal',
    role: 'CEO of Unseal',
    desc: ' Studio were so regular with their progress updates we almost began to think they were automated!',
  },
}

export const deliverData = {
  title: 'Deliver',
  image: { src: imageMeeting, shape: 2 },
  DescOne:
    ' About halfway through the Build phase, we push each project out by 6 weeks due to a change in requirements. This allows us to increase the budget a final time before launch.',

  DescTwo:
    'Despite largely using pre-built components, most of the progress on each project takes place in the final 24 hours. The development time allocated to each client is actually spent making augmented reality demos that go viral on social media.',

  DescThree:
    'We ensure that the main pages of the site are fully functional at launch — the auxiliary pages will, of course, be lorem ipusm shells which get updated as part of our exorbitant maintenance retainer.',

  phase: {
    heading: 'Included in this phase',
    tag: [
      {
        id: 1,
        title: 'Testing',
        point:
          'Our projects always have 100% test coverage, which would be impressive if our tests weren’t as porous as a sieve.',
      },
      {
        id: 2,
        title: 'Infrastructure',
        point:
          'To ensure reliability we only use the best Digital Ocean droplets that $4 a month can buy.',
      },
      {
        id: 3,
        title: 'Support',
        point:
          'Because we hold the API keys for every critical service your business uses, you can expect a lifetime of support, and invoices, from us.',
      },
    ],
  },
}

export const valuesData = {
  eyebrow: 'Our values',
  title: 'Balancing reliability and innovation',
  DescOne:
    'We strive to stay at the forefront of emerging trends andtechnologies, while completely ignoring them and forking that oldRails project we feel comfortable using. We stand by our core valuesto justify that decision.',

  phase: {
    tag: [
      {
        id: 1,
        title: 'Meticulous',
        point:
          'The first part of any partnership is getting our designer to put your logo in our template. The second step is getting them to do the colors.',
      },
      {
        id: 2,
        title: 'Efficient',
        point:
          'We pride ourselves on never missing a deadline which is easy because most of the work was done years ago.',
      },
      {
        id: 3,
        title: 'Adaptable',
        point:
          'Every business has unique needs and our greatest challenge is shoe-horning those needs into something we already built.',
      },
      {
        id: 4,
        title: 'Honest',
        point:
          ' We are transparent about all of our processes, banking on the simple fact our clients never actually read anything.',
      },
      {
        id: 5,
        title: 'Loyal',
        point:
          'We foster long-term relationships with our clients that go beyond just delivering a product, allowing us to invoice them for decades.',
      },
      {
        id: 6,
        title: 'Innovative',
        point:
          ' The technological landscape is always evolving and so are we. We are constantly on the lookout for new open source projects to clone.',
      },
    ],
  },
}
