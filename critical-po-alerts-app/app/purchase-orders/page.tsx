import PurchaseOrdersTable from "@/components/purchase-orders/purchase-orders-table";
import { BreadcrumbsAllPurchaseOrders } from "@/components/purchase-orders/breadcrumbs";


export default function Page() {
    return (
        <div>
            <BreadcrumbsAllPurchaseOrders />
            <PurchaseOrdersTable />
        </div>
    )
}