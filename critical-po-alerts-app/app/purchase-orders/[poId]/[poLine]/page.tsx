import { BreadcrumbsPurchaseOrderLine } from "@/components/purchase-orders/breadcrumbs";

export default async function Page(props: { params: Promise<{poId: string, poLine: number}> }) {
    const params = await props.params;
    const purchaseOrderId = params.poId;
    const purchaseOrderLine = params.poLine;
    
    return (
        <div className="space-y-6 p-6">
            <BreadcrumbsPurchaseOrderLine
                purchaseOrderId={purchaseOrderId}
                purchaseOrderLine={purchaseOrderLine}
            ></BreadcrumbsPurchaseOrderLine>
        </div>
    )
}