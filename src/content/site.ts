import { Clock, EyeOff, History, Images, Laptop, Lock, Menu, ShieldCheck, Sparkles } from "lucide-react";

export const navItems = [
  { label: "Photos Wallpaper", href: "/" }
];

export const appFeatures = [
  {
    title: "Rotates from your Photos library",
    description: "Chooses images from the Photos library and applies them as desktop wallpaper.",
    icon: Images
  },
  {
    title: "Built for the menu bar",
    description: "Runs as a small macOS menu bar utility with quick controls for schedule and refresh.",
    icon: Menu
  },
  {
    title: "Multi-display aware",
    description: "Picks one photo per connected screen and keeps every display covered.",
    icon: Laptop
  },
  {
    title: "Flexible schedules",
    description: "Refresh on login, on wake, every few minutes, hourly, daily, or manually.",
    icon: Clock
  },
  {
    title: "Wallpaper history",
    description: "Keeps a local plain-text history so you can identify which photo appeared later.",
    icon: History
  },
  {
    title: "Local by design",
    description: "No account, analytics, uploads, advertising services, database, or server-side data flow.",
    icon: ShieldCheck
  }
];

export const privacyPoints = [
  {
    title: "Reads Photos with permission",
    description: "The app asks macOS for Photos access because it needs image data to set wallpapers.",
    icon: Lock
  },
  {
    title: "Does not upload your photos",
    description: "Photo selection, wallpaper rendering, and logging all happen locally on the Mac.",
    icon: EyeOff
  },
  {
    title: "Stores useful local settings",
    description: "Schedule choice, login-item state, wallpaper history, and diagnostics stay on disk.",
    icon: Sparkles
  }
];

export const timeline = [
  "Open the menu bar app",
  "Choose a wallpaper schedule",
  "Let macOS grant Photos access",
  "Refresh now or let the schedule run",
  "Check history when a photo catches your eye"
];

export const stuartHighlights = [
  "Independent Mac app tinkerer",
  "Builds small utilities that do one job without an account system",
  "Likes boring local-first software that respects the machine it runs on"
];
