import Link from "next/link";
import { MoveRight } from "lucide-react";

export function PurchaseOrderDeliveryDetails(
    {
        purchaseOrderId,
        purchaseOrderLine,
        purchaseOrderDelivery
    } :
    {
        purchaseOrderId: string,
        purchaseOrderLine: number,
        purchaseOrderDelivery: number
    }
) {
    return (
        <Link href={`/purchase-orders/${purchaseOrderId}/${purchaseOrderLine}/${purchaseOrderDelivery}`}>
            <MoveRight />
        </Link>
    )
}