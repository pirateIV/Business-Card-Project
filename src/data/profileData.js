import {
  NodejsOriginal,
  ReactOriginal,
  JavascriptOriginal,
  TailwindcssOriginalWordmark,
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
  Github: 'github.com/ben64103',
};

const phone = {
  number: PHONE_NUMBER,
};

const technologies = [
  { name: 'JavaScript', icon: JavascriptOriginal },
  { name: 'React', icon: ReactOriginal },
  { name: 'NodeJS/Express', icon: NodejsOriginal },
  { name: 'TailwindCSS', icon: TailwindcssOriginalWordmark },
];

const profileData = {
  name,
  phone,
  profileLinks,
  technologies,
  city: 'Ibadan',
  profession: 'Frontend/Backend Dev.',
  bio: `High accomplishment and user-focused Front-end
        Developer adept in collaborating with UX and design
        teams to plan the technical writing and execution 
        of functional specifications for websites and applications.`,
};

export default profileData;
