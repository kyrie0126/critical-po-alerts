import { getPurchaseOrderId } from "@/lib/data/purchase-orders";
import { BreadcrumbsPurchaseOrderId } from "@/components/purchase-orders/breadcrumbs";

export default async function Page(props: { params: Promise<{poId: string}>  }) {
    const params = await props.params;
    const purchaseOrderId = params.poId;

    const purchaseOrderIdData = await getPurchaseOrderId(purchaseOrderId);

    return (
        <div>
            <BreadcrumbsPurchaseOrderId purchaseOrderId={purchaseOrderId} />
            <div>
                po page
            </div>
        </div>
    )
}