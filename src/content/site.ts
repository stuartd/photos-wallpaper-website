import { Clock, EyeOff, FolderOpen, History, Images, Laptop, Lock, Menu, ShieldCheck, SlidersHorizontal } from "lucide-react";

export const navItems = [
  { label: "Photos Wallpaper", href: "/" }
];

export const appFeatures = [
  {
    title: "Uses your photos",
    description: "Rediscover the photos in your library - Photos Wallpaper brings them back to your desktop, one wallpaper at a time.",
    icon: Images
  },
  {
    title: "Control it from the menu bar",
    description: "Refresh the wallpaper, change the schedule, and see the current state without opening a full app window.",
    icon: Menu
  },
  {
    title: "Find the photo again",
    description: "When you see a wallpaper photo you like (or don't like!) you can use the app to save it to the Photos Wallpaper album in your Photos library.",
    icon: History
  },
  {
    title: "Multi-display aware",
    description: "Sets a photo per display (as long as you have more photos than displays!).",
    icon: Laptop
  },
  {
    title: "Choose a schedule, if you like",
    description: "Refresh on login, every 5, 15 or 30 minutes, hourly, daily, or when you want a change. You can use the menu to change the wallpaper at any time.",
    icon: Clock
  },
  {
    title: "Keeps it local",
    description: "No account, analytics, uploads, advertising services, database, or server.",
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
