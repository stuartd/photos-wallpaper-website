import {
  Clock,
  CodeXml,
  EyeOff,
  FolderOpen,
  History,
  Images,
  Laptop,
  Lock,
  Mail,
  Menu,
  MonitorCheck,
  ShieldCheck,
  SlidersHorizontal
} from "lucide-react";

export const navItems = [{ label: "Photos Wallpaper", href: "/" }];

export const appFeatures = [
  {
    title: "Uses your photos",
    description:
      "Rediscover the photos in your library - Photos Wallpaper brings them back to your desktop, one wallpaper at a time.",
    icon: Images
  },
  {
    title: "Control it from the menu bar",
    description:
      "Refresh the wallpaper, change the schedule, and see the current state without opening a full app window.",
    icon: Menu
  },
  {
    title: "Find the photo again",
    description:
      "When you see a wallpaper photo you like (or don't like!) you can use the app to save it to the Photos Wallpaper album in your Photos library.",
    icon: History
  },
  {
    title: "Multi-display aware",
    description: "Sets a photo per display (as long as you have more photos than displays!).",
    icon: Laptop
  },
  {
    title: "Choose a schedule, if you like",
    description:
      "Refresh the wallpaper automatically on a schedule - login, every 5, 15 or 30 minutes, hourly, or daily - or if you just want a change, use the app menu to change the wallpaper at any time.",
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
    title: "Photos permission is required",
    description:
      "The app asks macOS for Photos access because it needs image data to choose and render wallpapers.",
    icon: Lock
  },
  {
    title: "No tracking or uploads",
    description:
      "Photos Wallpaper has no account system, analytics, ads, telemetry, backend, or server-side storage.",
    icon: EyeOff
  },
  {
    title: "Local files stay local",
    description:
      "Schedule choice, generated wallpaper cache files, and wallpaper history stay on disk.",
    icon: FolderOpen
  }
];

export const privacyDetails = [
  "Photos are read only after macOS Photos permission allows access.",
  "Generated wallpaper files are local cache files used because macOS wallpaper APIs need file URLs.",
  "Wallpaper history and runtime diagnostics are local plain-text files for your own troubleshooting."
];

export const supportPoints = [
  {
    title: "Check Photos permission",
    description:
      "Open System Settings > Privacy & Security > Photos and make sure Photos Wallpaper is allowed to read your library.",
    icon: Lock
  },
  {
    title: "Try a manual refresh",
    description:
      "Choose 'Change Wallpaper Now' from the menu. If that works, check the selected schedule and whether the Mac was asleep at the scheduled time.",
    icon: Clock
  },
  {
    title: "Confirm Start at Login",
    description:
      "Use the Start at Login toggle in the menu. If macOS still does not launch it, remove and re-enable the login item in System Settings.",
    icon: MonitorCheck
  },
  {
    title: "Include local logs",
    description:
      "Use Logs > Show Runtime Log from the menu. These diagnostic logs stay on your Mac unless you choose to share details.",
    icon: History
  },
  {
    title: "Email support",
    description:
      "For general help or anything private, email support@photos-wallpaper.app with your macOS version, app version, display setup, and relevant log lines.",
    icon: Mail
  },
  {
    title: "Use GitHub Issues",
    description:
      "For reproducible bugs and feature requests, open an issue with what happened, what you expected, the diagnostic logs, and whether manual refresh works.",
    icon: CodeXml
  }
];

export const productStats = [
  { label: "Data path", value: "Local Mac only" },
  { label: "Main surface", value: "Menu bar" },
  { label: "Displays", value: "One image per display" }
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
