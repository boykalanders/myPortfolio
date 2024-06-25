/* eslint-disable no-multi-str */
import {
  GitHub,
  LinkedIn,
  Mail as Gmail,
  Telegram,
  WhatsApp,
} from '@material-ui/icons';

export const heroInfo = {
  name: 'Patrick Rivera',
  image: '/images/myImage.jpg',
  title: [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Software Engineer',
    'MQL4/5 Developer',
  ],
  description: "As a Full Stack Developer with a passion for both coding and sports, I bring a dynamic and versatile approach to my work. My expertise spans front-end and back-end development, enabling me to create seamless and efficient web applications. Outside the tech world, I channel my energy into sports like football, basketball, and golf, finding inspiration in the teamwork, strategy, and precision they demand. This balance of technical skill and athletic enthusiasm drives me to SUCCESS.",
  contacts: [
    {
      id: 1,
      name: 'GitHub',
      icon: GitHub,
      username: 'boykalanders',
      link: 'https://github.com/boykalanders',
    },
    {
      id: 2,
      name: 'Email',
      icon: Gmail,
      username: 'patrickrivera',
      link: 'mailto:patrickrivera4ne1@gmail.com',
    },
    {
      id: 3,
      name: 'Telegram',
      icon: Telegram,
      username: 'boykalaners',
      link: 'https://t.me/Boykalanders',
    },
    {
      id: 4,
      name: 'WhatsApp',
      icon: WhatsApp,
      username: 'boykalaners',
      link: 'https://call.whatsapp.com/voice/vb1WlFjqnma9WBr0KQHguk',
    },
  ],
};

export const resumes = [
  {
    id: 1,
    year: 'April 2021 - April 2024',
    role: 'Senior Full Stack Engineer',
    companyName: 'Centreville Tech LLC',
    companyUrl: 'https://centrevilletech.com/',
    description:
      'Spearheaded code reviews and delivered insightful feedback to drive a 30% decrease in bugs and elevate frontend best practices.  \
      Enhanced website functionality by refactoring legacy code and implementing Redux and Context APIs, reducing code complexity by 30% and increasing feature delivery speed by 25%.  \
      Adopted several technical functions like Redux for state management and code splitting and dynamic import for decrease of initial load time, leading to 20% increase in performance. \
      Demonstrated exceptional time management skills by completing projects ahead of schedule through streamlined meetings and prioritization of tasks.',
  },
  {
    id: 2,
    year: 'April 2020 - March 2021',
    role: 'Lead Fronend Software Engineer',
    companyName: 'Fetch',
    companyUrl: 'https://fetchpackage.com/',
    description:
      'Developed MapView Component with React leaflet and customize the markers and tracking the delivery status. \
      Implemented Agile methodologies, resulting in a 30% reduction in development time and a 15% increase in team productivity. \
      Established clear communication channels within the team, resulting in a 30% reduction in miscommunication and improved overall team morale.',
  },
  {
    id: 3,
    year: 'March 2018 - March 2020',
    role: 'Senior Software Engineer',
    companyName: 'Thrive Market',
    companyUrl: 'https://thrivemarket.com/',
    description:
      'Developed a RESTful APIs with DRF(Django REST framework), resulting 20% increase in fetching data.\
      Enhanced security by 30%, utilizing https to secure transmission of sensitive data, including authentication tokens and payment.\
      Implemented atomic operation and event logging for transaction management, resulting 20% security in payment.\
      Utilized SEO tools to improve SEO performance and online advertising, leading to a 10% increase in search engine rankings\
      ',
  },
  {
    id: 4,
    year: 'October 2017 - March 2018',
    role: 'Frontend Engineer',
    companyName: 'OnTheMarket',
    companyUrl: 'http://www.onthemarket.com/',
    description: [
      'Developed a modular and scalable CSS architecture utilizing BEM methodology and developed UI/UX frontend, resulting in a 40% reduction in CSS file size and improved maintainability for future developers.',
      'Created a reusable Vue component library by adapting Material UI, decreasing project development time by an average of 30% and\
      implementing scalability through the whole project\
      ',
    ],
  },
];

export const educations = [
  {
    id: 1,
    year: 'August 2014 - September 2017',
    universityName: 'University Of Manchester',
    department: "Bachelor's Degree in Computer Science",
  },
  {
    id: 2,
    year: 'August 2011 - July 2014',
    universityName: 'Diploma Programme(DP), Hong Kong Academy',
    department: 'Global Citizen Diploma Certificate, English C1 Certificate',
  },
  {
    id: 3,
    year: 'July 2007 - August 2011',
    universityName:
      'Primary Years Programme & Middle Years Programme, Hong Kong Academy',
    department: 'HKA Diploma Certificate, English B1 Certificate',
  },
];

export const projects = [
  {
    id: 1,
    image: '/images/Habitat.png',
    name: 'Habitat Website',
    tools: ['E-Commerce', 'Typescript', 'React', 'Next', 'Redux', 'Redux Saga', 'React Hook', 'UI/UX', 'Responsive UI', 'Jest', 'Google Storage', 'Firebase'],
  },
  {
    id: 2,
    image: '/images/Clerked.png',
    name: 'Clerked App',
    tools: ['Healthcare', 'Typescript', 'React', 'React Native', 'CRM', 'Redux', 'Redux Saga', "React Hook", 'SASS', 'UI/UX', 'Responsive UI']
  },
  {
    id: 3,
    image: '/images/ThriveMarket.png',
    name: 'Thrive Market Website',
    tools: ['E-Commerce', 'Python', 'Django', 'RESTful API', 'Google Map', 'Amazon S3', 'OAuth', 'Pytest', 'Security', 'HTTPS', 'Amazom EC2'],
  },
  {
    id: 4,
    image: '/images/OnTheMarket.png',
    name: 'OnTheMarket Website',
    tools: ['E-Commerce', 'Javascript', 'Vue', 'Responsive UI', 'Docker'],
  },
  {
    id: 5,
    image: '/images/HKBank.png',
    name: 'My Portfolio Website',
    tools: ['Finance and Banking', 'Javascript', 'React', 'Responsive UI', 'Cypress', 'Jenkins'],
  },
  {
    id: 6,
    image: '/images/FetchPackage.png',
    name: 'Fetch Website',
    tools: ['Delivery', 'Javascript', 'React', 'Responsive UI', 'Cypress'],
  },
  {
    id: 7,
    image: '/images/RetailSample.jpg',
    name: 'Retail Sample',
    tools: ['E-Commerce', 'PHP', 'Laravel', 'Responsive UI', 'RESTful API', 'MVC', 'Selenium'],
  },
  {
    id: 8,
    image: '/images/AIA-Insurance.png',
    name: 'Retail Sample',
    tools: ['Insurance', 'PHP', 'Laravel', 'Responsive UI', 'RESTful API', 'MVC', 'PHPUnit'],
  },
  {
    id: 9,
    image: '/images/mailerrize.png',
    name: 'Mailerrize',
    tools: ['Mailer', 'Javascript', 'Nest', 'RESTful API', 'Cold Mail', 'Google Data Analytics'],
  },
  {
    id: 10,
    image: '/images/EARobot.jpeg',
    name: 'MQL4/5 Expert Advisors',
    tools: ['MQL4', 'MQL5', 'Indicator', 'AI', 'Martingale', 'Grid Strategy'],
  },
  {
    id: 11,
    image: '/images/myPortfolio.png',
    name: 'My Portfolio Website',
    tools: ['Javascript', 'React', 'MUI', 'Responsive UI', 'Docker', 'Nginx'],
  },
];

export const skills = [
  {
    title: 'HTML',
    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  },
  {
    title: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    title: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  },

  {
    title: 'CSS',
    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
  },
  {
    title: 'TypeScript',
    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
  },
  {
    title: 'Firebase',
    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
  {
    title: 'Bootstrap',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
  },
  {
    title: 'ReactJS',
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  },
  // msql
  {
    title: 'MySQL',
    logo: 'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png',
  },

  {
    title: 'Material-UI',
    logo: 'https://camo.githubusercontent.com/cf05625198fe7b6ad8a302d1ce16bc99b93ec2ac/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667',
  },

  {
    title: 'NodeJS',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  },
  {
    title: 'PHP',
    logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
  },
  {
    title: 'VS Code',
    logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg',
  },

  {
    title: 'ExpressJS',
    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  },

  {
    title: 'Git',
    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  },
  {
    title: 'Linux',
    logo: 'https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png',
  },
  {
    title: 'npm',
    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg',
  },
  {
    title: 'GitHub',
    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
  },
];
