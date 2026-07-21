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

export const guildLinks: GuildLink[] = [
  {
    label: "Join Discord",
    href: "https://discord.gg/replace-this",
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
    description: "Weekly clears, loot runs, and progression nights.",
  },
  {
    title: "Guild Hall",
    image: publicAsset("images/guild-hall.png"),
    tag: "Community",
    description: "Planning sessions, crafting, and casual hangouts.",
  },
];

export const guildStats = [
  { label: "Focus", value: "PvE / PvP", icon: Swords },
  { label: "Base", value: "Thailand", icon: ShieldCheck },
  { label: "Schedule", value: "Evenings", icon: CalendarDays },
  { label: "Vibe", value: "Chill wins", icon: Trophy },
  { label: "Comms", value: "Discord", icon: Disc3 },
];
