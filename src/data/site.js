import {
  HiOutlineEnvelope, HiOutlineSquares2X2, HiOutlineDevicePhoneMobile, HiOutlineGlobeAlt,
  HiOutlineShoppingBag, HiOutlinePaintBrush, HiOutlineCursorArrowRays,
} from 'react-icons/hi2';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiTailwindcss, SiFramer, SiAntdesign,
  SiExpo, SiApple, SiAndroid,
  SiNodedotjs, SiPostgresql, SiSupabase, SiFirebase, SiGraphql,
  SiSanity, SiShopify,
  SiVercel, SiAmazonaws, SiDocker, SiSentry,
  SiFigma,
} from 'react-icons/si';
import Project1 from '../assets/project1/Project1.png?url';
import Project2 from '../assets/project2/Project2.PNG?url';
import Project3 from '../assets/project3/Main.PNG?url';
import Abacus from '../assets/project4/abacus.jpg?url';
import Prestige from '../assets/project5/prestige.jpg?url';
import AduDark from '../assets/project6/adu-dark.jpg?url';
import AduLight from '../assets/project6/adu-light.jpg?url';

export const CONTACT = {
  email: 'tural.aliyev555@gmail.com',
  phone: '+994 50 874 79 05',
  phoneHref: 'tel:+994508747905',
  phone2: '+994 55 206 99 95',
  phone2Href: 'tel:+994552069995',
  whatsapp: 'https://wa.me/994508747905',
};

export const SOCIALS = [
  { href: `mailto:${CONTACT.email}`, icon: HiOutlineEnvelope, label: 'Email' },
  { href: CONTACT.whatsapp, icon: FaWhatsapp, label: 'WhatsApp' },
  { href: 'https://t.me/tural_1995_aliyev', icon: FaTelegramPlane, label: 'Telegram' },
  { href: 'https://www.instagram.com/', icon: FaInstagram, label: 'Instagram' },
];

/* Newest first. Order matches translations[lang].projects and .work.cases */
export const PROJECTS = [
  {
    slug: 'adu-ai-advisor',
    title: 'ADU AI Advisor',
    platform: 'mobile',
    // Primary link for the card; both stores are listed in `stores`
    url: 'https://apps.apple.com/az/app/adu-ai-advisor/id6801330041',
    domain: 'App Store · Google Play',
    image: AduDark,
    imageAlt: AduLight,
    filter: 'mobile',
    tech: ['iOS', 'Android', 'AI'],
    stores: {
      appStore: 'https://apps.apple.com/az/app/adu-ai-advisor/id6801330041',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.pashaskerov21steam.aulaiadvisor',
    },
  },
  {
    slug: 'abacus-audit',
    title: 'Abacus Audit',
    url: 'https://abacusaudit.az/',
    domain: 'abacusaudit.az',
    image: Abacus,
    filter: 'corporate',
    tech: ['React', 'Vite', 'Tailwind', 'Supabase'],
  },
  {
    slug: 'prestige-group',
    title: 'Prestige Group',
    url: 'https://prestigegroup.az/',
    domain: 'prestigegroup.az',
    image: Prestige,
    filter: 'corporate',
    tech: ['React', 'Vite', 'Tailwind'],
  },
  {
    slug: 'danilov',
    title: 'Danilov',
    url: 'https://danilov.az',
    domain: 'danilov.az',
    image: Project3,
    filter: 'retail',
    tech: ['React', 'Vite', 'Tailwind', 'Sanity'],
  },
  {
    slug: 're-az',
    title: 'RE:AZ',
    url: 'https://design-az.netlify.app/',
    domain: 'design-az.netlify.app',
    image: Project1,
    filter: 'media',
    tech: ['React', 'Vite', 'Tailwind', 'Sanity'],
  },
  {
    slug: 'fresh-garden-quba',
    title: 'Fresh Garden Quba',
    url: 'https://freshgardenquba.az/',
    domain: 'freshgardenquba.az',
    image: Project2,
    filter: 'corporate',
    tech: ['React', 'Tailwind'],
  },
];

export const WORK_FILTERS = ['all', 'mobile', 'corporate', 'retail', 'media'];

/* Order matches translations[lang].home.services.items and .services.details */
export const SERVICES = [
  {
    slug: 'custom-software',
    icon: HiOutlineSquares2X2,
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase'],
    work: [],
  },
  {
    slug: 'mobile-apps',
    icon: HiOutlineDevicePhoneMobile,
    tech: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Supabase', 'Node.js'],
    work: ['adu-ai-advisor'],
  },
  {
    slug: 'web-development',
    icon: HiOutlineGlobeAlt,
    tech: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Sanity', 'Vercel'],
    work: ['abacus-audit', 'prestige-group', 're-az', 'fresh-garden-quba'],
  },
  {
    slug: 'ecommerce',
    icon: HiOutlineShoppingBag,
    tech: ['React', 'Next.js', 'Shopify', 'Sanity', 'Supabase', 'Tailwind CSS'],
    work: ['danilov'],
  },
  {
    slug: 'ui-ux-design',
    icon: HiOutlinePaintBrush,
    tech: ['Figma', 'Framer Motion'],
    work: ['adu-ai-advisor', 'abacus-audit', 'prestige-group', 'danilov', 're-az', 'fresh-garden-quba'],
  },
  {
    slug: 'landing-pages',
    icon: HiOutlineCursorArrowRays,
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    work: [],
  },
];

/* Order matches translations[lang].stack.groups */
export const STACK_GROUPS = [
  [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Vue', icon: SiVuedotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'Ant Design', icon: SiAntdesign },
  ],
  [
    { name: 'React Native', icon: SiReact },
    { name: 'Expo', icon: SiExpo },
    { name: 'iOS', icon: SiApple },
    { name: 'Android', icon: SiAndroid },
  ],
  [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'GraphQL', icon: SiGraphql },
  ],
  [
    { name: 'Sanity', icon: SiSanity },
    { name: 'Shopify', icon: SiShopify },
  ],
  [
    { name: 'Vercel', icon: SiVercel },
    { name: 'AWS', icon: SiAmazonaws },
    { name: 'Docker', icon: SiDocker },
    { name: 'Sentry', icon: SiSentry },
  ],
  [
    { name: 'Figma', icon: SiFigma },
  ],
];

export const MARQUEE = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React Native', icon: SiExpo },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Sanity', icon: SiSanity },
  { name: 'Shopify', icon: SiShopify },
  { name: 'Vercel', icon: SiVercel },
  { name: 'AWS', icon: SiAmazonaws },
  { name: 'Figma', icon: SiFigma },
];
