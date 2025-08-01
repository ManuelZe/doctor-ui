import { AppSidebar } from "@/components/app-sidebar"
import { cookies } from "next/headers"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SoldeActuel } from "@/components/dashboard/solde_actuel"
import { SoldeJour } from "@/components/dashboard/solde_jour"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { GetSoldeActuel } from "app/api/solde_actuel/route"
import { PrescriptionActuel } from "@/components/dashboard/montant_actuel_prescription"
import { RealisationActuel } from "@/components/dashboard/montant_actuel_realisation"
import { TodayCommission } from "app/api/today_commission/route"

export default async function Page() {
  const cookieStore = await cookies()
  const name = cookieStore.get("name")?.value || "User"
  const doctorId = cookieStore.get("doctor_id")?.value || "Unknown ID"
  const federationId = cookieStore.get("federation_id")?.value || "Unknown DEDI"
  const solde = await GetSoldeActuel(Number(doctorId))
  const jour = await TodayCommission(Number(doctorId))


  return (
    <SidebarProvider>
      <AppSidebar name={name} doctorId={doctorId} federationId={federationId} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  {name}
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <SoldeActuel
                { ... solde}
              />
              <PrescriptionActuel
                { ... solde}
              />
              <RealisationActuel
                { ... solde}
              />
              <SoldeJour
                { ... jour}
              />
            <div className="bg-blue-100/50 aspect-video rounded-xl dark:bg-blue-800/50" />
            <div className="bg-blue-100/50 aspect-video rounded-xl dark:bg-blue-800/50" />
          </div>
          <div className="bg-blue-100/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min dark:bg-blue-800/50" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
