import { BreadcrumbsPurchaseOrderDelivery } from "@/components/purchase-orders/breadcrumbs";

export default async function Page(props: { params: Promise<{poId: string, poLine: number, poDelivery: number}> }) {
    const params = await props.params;
    const purchaseOrderId = params.poId;
    const purchaseOrderLine = params.poLine;
    const purchaseOrderDelivery = params.poDelivery;

    return (
        <div>
            <BreadcrumbsPurchaseOrderDelivery
                purchaseOrderId={purchaseOrderId}
                purchaseOrderLine={purchaseOrderLine}
                purchaseOrderDelivery={purchaseOrderDelivery}
            ></BreadcrumbsPurchaseOrderDelivery>
            <div>
            delivery page
            </div>
        </div>
        
    )
}