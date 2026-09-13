import { getPurchaseOrderId } from "@/lib/data/purchase-orders";
import { BreadcrumbsPurchaseOrderId } from "@/components/purchase-orders/breadcrumbs";

export default async function Page(props: { params: Promise<{poId: string}>  }) {
    const params = await props.params;
    const purchaseOrderId = params.poId;

    const purchaseOrderIdData = await getPurchaseOrderId(purchaseOrderId);

    return (
        <div className="space-y-6 p-6">
            <BreadcrumbsPurchaseOrderId purchaseOrderId={purchaseOrderId} />
            <div>
                po page
            </div>
        </div>
    )
}