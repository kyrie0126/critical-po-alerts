import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export function BreadcrumbsAllPurchaseOrders() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        Purchase Orders
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export function BreadcrumbsPurchaseOrderId(
    {
        purchaseOrderId
    }: 
    {
        purchaseOrderId: string
    }
) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link href="/purchase-orders" />}>
                        Purchase Orders
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        {purchaseOrderId}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export function BreadcrumbsPurchaseOrderLine(
    {
        purchaseOrderId,
        purchaseOrderLine
    }: 
    {
        purchaseOrderId: string,
        purchaseOrderLine: number,
    }
) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link href="/purchase-orders" />}>
                        Purchase Orders
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link href={`/purchase-orders/${purchaseOrderId}`} />}>
                        {purchaseOrderId}
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        {`Line ${purchaseOrderLine}`}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export function BreadcrumbsPurchaseOrderDelivery(
    {
        purchaseOrderId,
        purchaseOrderLine,
        purchaseOrderDelivery
    }: 
    {
        purchaseOrderId: string,
        purchaseOrderLine: number,
        purchaseOrderDelivery: number
    }
) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link href="/purchase-orders" />}>
                        Purchase Orders
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link href={`/purchase-orders/${purchaseOrderId}`} />}>
                        {purchaseOrderId}
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />
                
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link href={`/purchase-orders/${purchaseOrderId}/${purchaseOrderLine}`} />}>
                        {`Line ${purchaseOrderLine}`}
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbPage>
                        {`Delivery ${purchaseOrderDelivery}`}
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}