import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hemanth Reddy | Deep Learning Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I\'m ',
  name: 'Hemanth Reddy',
  // subtitle: 'Computer Vision Engineer and Python Programmer'
  // subtitle: 'Python Programmer with expertise in Data Science technologies',
  subtitle: 'I help Machines See, Comprehend and Act',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',

  paragraphOne: "'More than 85% of cyberspace data is in the form of pixels' - Cisco Report\
  'Almost 50% of the brain is involved in Vision' \
  Two mutually exclusive statements but it summarizes what I'm working on. I work with providing and analysing vision for a machine. \
  Vision - the cornerstone of our existence, some studies even say its the major factor for evolution.!, \
  that is what researchers wish to bring to machines, to enable them to assist us better. I work with businesses to \
  help them use the technology and increase their productivity", 

  paragraphTwo: "",
  paragraphThree: "",

  // paragraphOne: "I'm a Deep learning practitioner with experience as \
  //       python programmer helping Mercedes Benz R&D India automate their IT \
  //       infrastructure using Python and Shell scripting.\
  //       I also have experience as System administrator.",
  
  // paragraphTwo: "A firm believer that AI would be instrumental for our future, \
  //     I think Multitask Deep networks are the way to go.\
  //     I would love to discuss/assist with defining/solving Computer Vision or NLP problem using deep learning.",

  // paragraphThree: "From creating syntetic data of more than a million images to designing a pipeline that works with some hundreds of datapoints...\
  // I've worked on variety of projects, some of which can be seen below. I've including live demos for you to try out as well. \
  // Do check out my resume on the way if you are interested",


  // paragraphOne: "I'm currently working as python programmer. As Infoscion, for past few years, \
  // I’ve been supporting Mercedes Benz R&D India to automate their IT server Infrastructure using Python and Shell scripting",

  // paragraphTwo: "A discussion with one of my fellow yatri from Jagriti Yatra (World’s Largest Train Journey and Entrepreneurship Bootcamp on wheels), \
  // aroused curiosity in me to understand/know/learn how machines can think and decide like humans, better than humans in some cases. \
  // I started researching on how it is achieved by reading blogs on Medium, attending meetups, participating in seminars, etc..  \
  // \nMore and more I explored, I felt that my skills can be put to good use in this domain and I choose it to be my career. \
  // I have taken courses on Classical(Statistical) Machine Learning and now in Deep learning where my current subject interest is towards Computer Vision.",

  // paragraphThree: "I believe that AI is instrumental for our future. \
  // Computer Vision and NLP play a very significant and interesting role in it. \
  // I want to be part of those who are using Deep Learning to solve real world problems",

  resume: 'https://www.resumemaker.online', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Monocular Depth Estimation on 2D images',
    info: 'Curated own dataset',
    info2: 'Did it all',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hemanth346@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/hemanth346',
    },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: 'https://www.linkedin.com/in/hemanth346/',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hemanth346',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
