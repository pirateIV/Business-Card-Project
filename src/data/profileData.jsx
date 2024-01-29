import {
  NodejsOriginal,
  ReactOriginal,
  JavascriptOriginal,
  TailwindcssPlain,
} from 'devicons-react';

const PHONE_NUMBER = '(+234) 902 266 8728';

const name = {
  firstName: 'Ben',
  lastName: 'Abolade',
};

const profileLinks = {
  Twitter: '#',
  Linkedin: '#',
  Gmail: 'benabolade@gmail.com',
  Github: 'https://github.com/ben64103',
};

const phone = {
  Number: PHONE_NUMBER,
};

const technologies = [
  {
    id: 1,
    name: 'JavaScript',
    icon: <JavascriptOriginal className='inline-flex' />,
  },
  {
    id: 2,
    name: 'React',
    icon: <ReactOriginal className='inline-flex' />,
  },
  {
    id: 3,
    name: 'NodeJS/Express',
    icon: <NodejsOriginal className='inline-flex' />,
  },
  {
    id: 4,
    name: 'TailwindCSS',
    icon: <TailwindcssPlain className='inline-flex' />,
  },
];

const profileData = {
  name,
  profileLinks,
  technologies,
  city: 'Ibadan',
  phone: phone.Number,
  profession: 'FullStack Developer',
  bio: `High accomplishment and user-focused Front-end
        Developer adept in collaborating with UX and design
        teams to plan the technical writing and execution 
        of functional specifications for websites and applications.`,
};

export default profileData;
