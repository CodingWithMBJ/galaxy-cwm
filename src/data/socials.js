import {
  faGithub,
  faLinkedinIn,
  faYoutube,
  faCodepen,
  faTwitch,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export const socials = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: faGithub,
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: faLinkedinIn,
    themeColor: "hover:text-blue-500",
  },
  {
    id: 3,
    name: "YouTube",
    href: "https://youtube.com/@yourchannel",
    icon: faYoutube,
    themeColor: "hover:text-red-500",
  },
  {
    id: 4,
    name: "CodePen",
    href: "https://codepen.io/yourusername",
    icon: faCodepen,
  },
  {
    id: 5,
    name: "Twitch",
    href: "https://twitch.tv/yourusername",
    icon: faTwitch,

    themeColor: "hover:text-purple-600",
  },
  {
    id: 6,
    name: "Discord",
    href: "https://discord.gg/yourinvite",
    icon: faDiscord,
    themeColor: "hover:text-indigo-500",
  },
];
