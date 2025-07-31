"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  LayoutDashboardIcon,
  LucideBriefcaseMedical,
  BadgeQuestionMarkIcon,
  Activity,
  DollarSign
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
      isActive: true,
    },
    {
      title: "Patients",
      url: "/doctor/patients",
      icon: LucideBriefcaseMedical,
    },
    {
      title: "Examens",
      url: "/doctor/examens",
      icon: Activity,
    },
    {
      title: "Commissions",
      url: "/doctor/commissions",
      icon: DollarSign,
    },
    {
      title: "Informations Générales",
      url: "/doctor/general_information",
      icon: BookOpen,
    },
    {
      title: "Requêtes",
      url: "/doctor/requetes",
      icon: BadgeQuestionMarkIcon,
    },
  ],
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  name: string
  doctorId: string
  federationId : string
}

export function AppSidebar({ name, doctorId, federationId, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={[{name, doctorId, federationId}]} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{name, federationId}} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
