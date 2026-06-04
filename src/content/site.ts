import { Clock, EyeOff, FolderOpen, History, Images, Laptop, Lock, Menu, ShieldCheck, SlidersHorizontal } from "lucide-react";

export const navItems = [
  { label: "Photos Wallpaper", href: "/" }
];

export const appFeatures = [
  {
    title: "Choose a Photos source",
    description: "Point the app at your Photos library and let it pick images from the collection you already keep.",
    icon: Images
  },
  {
    title: "Control it from the menu bar",
    description: "Refresh now, change schedule, and see the current state without opening a full app window.",
    icon: Menu
  },
  {
    title: "Multi-display aware",
    description: "Picks one photo per connected screen, so a desk with two displays does not get treated like one canvas.",
    icon: Laptop
  },
  {
    title: "Use a real schedule",
    description: "Refresh on login, on wake, every few minutes, hourly, daily, or only when you ask.",
    icon: Clock
  },
  {
    title: "Find the photo again",
    description: "Writes a local plain-text history file when you want to identify the image that appeared.",
    icon: History
  },
  {
    title: "Keep the flow local",
    description: "No account, analytics, uploads, advertising services, database, or server-side data flow.",
    icon: ShieldCheck
  }
];

export const privacyPoints = [
  {
    title: "Photos permission is explicit",
    description: "The app asks macOS for Photos access because it needs image data to set wallpapers.",
    icon: Lock
  },
  {
    title: "Nothing gets uploaded",
    description: "Photo selection, wallpaper rendering, and logging all happen locally on the Mac.",
    icon: EyeOff
  },
  {
    title: "Settings stay on disk",
    description: "Schedule choice, login-item state, wallpaper history, and diagnostics stay on disk.",
    icon: FolderOpen
  }
];

export const timeline = [
  "Grant Photos access in macOS",
  "Choose a refresh schedule",
  "Pick the display behavior",
  "Refresh immediately or wait for the next trigger",
  "Use history to identify a wallpaper later"
];

export const productStats = [
  { label: "Data path", value: "Local Mac only" },
  { label: "Main surface", value: "Menu bar" },
  { label: "Displays", value: "One image each" },
  { label: "History", value: "Plain text" }
];

export const setupChoices = [
  {
    title: "Photo source",
    value: "Photos library",
    icon: Images
  },
  {
    title: "Schedule",
    value: "Hourly, daily, wake, login, manual",
    icon: SlidersHorizontal
  },
  {
    title: "Privacy",
    value: "No account or upload path",
    icon: ShieldCheck
  }
];

export const stuartHighlights = [
  "Independent Mac app tinkerer",
  "Builds small utilities that do one job without an account system",
  "Likes boring local-first software that respects the machine it runs on"
];
