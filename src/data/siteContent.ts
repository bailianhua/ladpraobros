import {
  CalendarDays,
  Disc3,
  Gamepad2,
  MessageCircle,
  ShieldCheck,
  Swords,
  Trophy,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { publicAsset } from "../utils/assets";

export type GuildLink = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export type PortfolioItem = {
  title: string;
  image: string;
  tag: string;
  description: string;
};

export type GameEntry = {
  title: string;
  image: string;
  guildName: string;
  server: string;
  detailLabel: string;
  detailValue: string;
  description: string;
};

export const guildLinks: GuildLink[] = [
  {
    label: "Join Discord",
    href: "https://discord.gg/ladpraobross",
    description: "Main voice, announcements, and party finder.",
    icon: MessageCircle,
  },
  {
    label: "Guild Game",
    href: "https://example.com/game",
    description: "Official game page or launcher link.",
    icon: Gamepad2,
  },
  {
    label: "Guild Tools",
    href: "https://example.com/tools",
    description: "Build planner, tracking sheets, and utility links.",
    icon: Wrench,
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Raid Clears",
    image: publicAsset("images/raid-clear.png"),
    tag: "PvE",
    description: "Weekly , เคลียร์ energy , events",
  },
  {
    title: "Guild Hall",
    image: publicAsset("images/guild-hall.png"),
    tag: "Community",
    description: "ประชุมแผน , คุย patch ใหม่ , ถก META",
  },
  {
    title: "JoanSlava : ผมอยากจะถามเรื่องสำคัญ",
    image: publicAsset("images/question.png"),
    tag: "?",
    description: "ChabaKaew : อย่า ๆๆๆๆ ",
  },
  {
    title: "โคมแดง",
    image: publicAsset("images/khomdaeng.png"),
    tag: "NSFW",
    description: "ใจไม่ถึงอย่ากดโคมแดง",
  },
  {
    title: "โต้รุ่ง",
    image: publicAsset("images/dawn.png"),
    tag: "4AM",
    description: "Sleep is for the weak",
  },
  {
    title: "ล้อมวงฟัง youtube",
    image: publicAsset("images/ghoststory.png"),
    tag: "Ghost , Gossip , News",
    description: "พี่อย่าเพิ่งนอนพี่ อยู่ด้วยกันก่อน",
  },
];

export const games: GameEntry[] = [
  {
    title: "Where wind meets",
    image: publicAsset("images/wwm.jpg"),
    guildName: "Ladpraobros",
    server: "SEA",
    detailLabel: "Focus",
    detailValue: "Casual/Hardcore",
    description: "GvG , ไต่หอ , HR , เคลียร์จี้",
  },
  {
    title: "Palworld",
    image: publicAsset("images/pal.jpg"),
    guildName: "",
    server: "Private",
    detailLabel: "",
    detailValue: "",
    description: "ขอลิ้ง server ในดิสคอร์ด",
  },
  {
    title: "Spirit Vale",
    image: publicAsset("images/spirit.png"),
    guildName: "",
    server: "",
    detailLabel: "",
    detailValue: "",
    description: "",
  },
  {
    title: "Stardew Valley",
    image: publicAsset("images/stardew.jpg"),
    guildName: "",
    server: "",
    detailLabel: "",
    detailValue: "",
    description: "",
  },
  {
    title: "Overwatch",
    image: publicAsset("images/overwatch.jpg"),
    guildName: "",
    server: "",
    detailLabel: "",
    detailValue: "",
    description: "",
  },
  {
    title: "Diablo",
    image: publicAsset("images/diablo.jpg"),
    guildName: "",
    server: "",
    detailLabel: "",
    detailValue: "",
    description: "",
  },
  {
    title: "Grandblue Fantasy Relink",
    image: publicAsset("images/grandblue.jpg"),
    guildName: "",
    server: "",
    detailLabel: "",
    detailValue: "",
    description: "",
  }
];

export const guildStats = [
  { label: "Focus", value: "PvE / PvP", icon: Swords },
  { label: "Base", value: "Thailand", icon: ShieldCheck },
  { label: "Schedule", value: "Evenings", icon: CalendarDays },
  { label: "Vibe", value: "Chill wins", icon: Trophy },
  { label: "Comms", value: "Discord", icon: Disc3 },
];
