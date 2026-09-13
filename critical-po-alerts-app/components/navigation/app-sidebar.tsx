import {
    User,
    Package,
    Factory,
    Lightbulb,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div>
            <div className="font-semibold">Company Name</div>
            <div className="text-sm text-muted-foreground">Supplier Management Platform</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            render={<Link href="/" />}
                            className="hover:text-sidebar-primary hover:bg-sidebar-primary-foreground"
                        >
                            <User />
                            <span>My Work</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            render={<Link href="/purchase-orders" />}
                            className="hover:text-sidebar-primary hover:bg-sidebar-primary-foreground"
                        >
                            <Package />
                            <span>Purchase Orders</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            render={<Link href="/suppliers" />}
                            className="hover:text-sidebar-primary hover:bg-sidebar-primary-foreground"
                        >
                            <Factory />
                            <span>Suppliers</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            render={<Link href="/insights" />}
                            className="hover:text-sidebar-primary hover:bg-sidebar-primary-foreground"
                        >
                            <Lightbulb />
                            <span>Insights</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}