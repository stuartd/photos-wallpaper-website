import {
  Clock,
  EyeOff,
  FolderOpen,
  History,
  Lock,
  MonitorCheck
} from "lucide-react";


export const privacyPoints = [
  {
    title: "Photos access, with permission",
    description:
      "The app asks macOS for Photos access because it needs to choose and show wallpapers.",
    icon: Lock
  },
  {
    title: "No upload or tracking",
    description:
      "Photos Wallpaper has no account system, analytics, ads, telemetry, backend, or server-side storage.",
    icon: EyeOff
  },
  {
    title: "Local working files",
    description: "Generated wallpaper files, wallpaper history, and runtime logs stay on your Mac.",
    icon: FolderOpen
  }
];

export const privacyDetails = [
  "Photos are read only after macOS Photos permission allows access.",
  "Generated wallpaper files are local cache files used because macOS wallpaper APIs need file URLs.",
  "Wallpaper history and runtime diagnostics are local plain-text files for troubleshooting."
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
  }
];
