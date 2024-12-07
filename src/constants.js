export const NAV_LINKS = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Reviews", href: "reviews" },
  { name: "Contact", href: "contact" },
];

import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const SOCIAL_LINKS = [
  {
    platform: "Facebook",
    href: "https://www.facebook.com/phippsopticians",
    icon: <FaFacebook size={30} />,
  },
  {
    platform: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram size={30} />,
  },
  {
    platform: "Twitter",
    href: "https://x.com/PhippsOpticians",
    icon: <BsTwitterX size={30} />,
  },
  {
    platform: "Email",
    href: "mailto:phippsoptheckie@hotmail.co.uk",
    icon: <MdEmail size={30} />,
  },
  {
    platform: "Phone",
    href: "tel:+441924409334",
    icon: <FaPhone size={30} />,
  },
];

import { FaEye, FaGraduationCap, FaGlasses, FaHistory } from "react-icons/fa";

export const TILES = [
  {
    id: 1,
    icon: <FaEye className="text-teal text-4xl mb-4" />,
    title: "Your Precious Eyes",
    text: `Your eyes can perceive more detail than the most advanced cameras and colours beyond imagination. At Phipps Opticians, we prioritise your eye health because we know how important it is to care for them.`,
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-teal text-4xl mb-4" />,
    title: "Decades of Expertise",
    text: `Graham and Angela Phipps, both graduates of Bradford University, qualified as optometrists in 1990. After gaining experience in other practices, they established Phipps Opticians in Heckmondwike in 1994.`,
  },
  {
    id: 3,
    icon: <FaHistory className="text-teal text-4xl mb-4" />,
    title: "Over 20,000 Eyes Cared For",
    text: `Since our founding in 1994, we’ve provided expert care to over 20,000 eyes across West Yorkshire, helping the community enjoy better vision and quality of life.`,
  },
  {
    id: 4,
    icon: <FaGlasses className="text-teal text-4xl mb-4" />,
    title: "Quality Eyewear & Aftercare",
    text: `We offer a wide range of eyewear from luxury brands like Gucci and Hugo Boss to budget-friendly styles. Our aftercare service and spectacle MOT ensure your eyewear stays in optimal condition until your next exam.`,
  },
];

export const GALLERY = [
  { id: 1, href: "/images/gallery1.jpg" },
  { id: 2, href: "/images/gallery2.jpg" },
  { id: 3, href: "/images/gallery3.jpg" },
  { id: 4, href: "/images/gallery4.jpg" },
];

export const SERVICES = [
  {
    title: "Retinal Imaging",
    description:
      "Comprehensive eye testing using the latest technology to examine your eye health, along with detailed retinal imaging to ensure optimal eye health.",
  },
  {
    title: "Contact Lenses",
    description:
      "From daily to monthly lenses, we provide fitting, aftercare, and expert consultations to ensure comfort and clarity with the latest contact lens technology.",
  },
  {
    title: "Designer Frames",
    description:
      "Browse our extensive collection of high-quality, fashionable eyewear from leading designer brands to find the perfect frame for your style.",
  },
  {
    title: "Varifocal & Specialist Lenses",
    description:
      "Experience the latest in free-form varifocal lenses, and explore specialist lenses like Kodak digital single vision and multi-focal lenses tailored for your needs.",
  },
  {
    title: "Thinner, Lighter Lenses",
    description:
      "Get the most advanced lenses designed to be thinner, lighter, and more comfortable for your prescription, without compromising vision quality.",
  },
  {
    title: "Aftercare",
    description:
      "We provide expert advice and comprehensive aftercare for all your eyewear needs, ensuring you have the best fit and comfort for every prescription.",
  },
];

export const REVIEWS = [
  {
    name: "Margaret",
    review:
      "I want to thank Phipps Opticians for seeing me this morning. I was sent by my doctor, and was seen straight away. Thank you for being so kind and supportive.",
  },
  {
    name: "David",
    review:
      "Nice to finally find an optician who isn't a production line and actually cares about their clients.",
  },
  {
    name: "Amy",
    review:
      "Was seen as an emergency as I couldn’t get in to my own optician, very friendly and professional, referred me there and then to Pinderfields and was seen the next day. So grateful for them fitting me in so quickly and sorting my problem. Would highly recommend and I will be switching to these guys for my future eye examinations. Thanks again for all your help.",
  },
  {
    name: "Lesley",
    review:
      "I have been going to Phipps Opticians for over 30 years. At Phipps you are seen as a person not a number. I fully recommend Phipps & their professional staff.",
  },
  {
    name: "Diane",
    review:
      "Called in on Saturday asking for some emergency help. The lady there was amazingly helpful and my daughter's glasses are mended. Thank you! Highly recommended!",
  },
];