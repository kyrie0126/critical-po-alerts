import PurchaseOrdersTable from "@/components/purchase-orders/purchase-orders-table";
import { BreadcrumbsAllPurchaseOrders } from "@/components/purchase-orders/breadcrumbs";
import Search from "@/components/search";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string
    }>
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";

    return (
        <div className="space-y-6 p-6">
            <BreadcrumbsAllPurchaseOrders />
            <Search placeholder="Search deliveries..." />
            <PurchaseOrdersTable query={query} />
        </div>
    )
}