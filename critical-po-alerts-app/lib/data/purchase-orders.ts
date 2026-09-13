import { AllPurchaseOrderDataView } from "@/lib/definitions";
import { mockAllPurchaseOrderDataView } from "@/lib/data/mock-data";


export async function getPurchaseOrderDeliveries(): Promise<AllPurchaseOrderDataView[]> {
    return mockAllPurchaseOrderDataView;
}

export async function fetchPurchaseOrderDeliveries(
    query: string
): Promise<AllPurchaseOrderDataView[]> {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
        return mockAllPurchaseOrderDataView;
    }

    return mockAllPurchaseOrderDataView.filter(
        (delivery) => (
            delivery.purchaseOrderDeliveryId.toLowerCase().includes(normalizedQuery) ||
            delivery.siteName.toLowerCase().includes(normalizedQuery) ||
            delivery.supplierName.toLowerCase().includes(normalizedQuery) ||
            delivery.orderDate.toLowerCase().includes(normalizedQuery) ||
            delivery.buyerName.toLowerCase().includes(normalizedQuery) ||
            delivery.partId.toLowerCase().includes(normalizedQuery) ||
            delivery.expectedDate.toLowerCase().includes(normalizedQuery) ||
            delivery.quantity.toString().includes(normalizedQuery) ||
            delivery.extCostCents.toString().includes(normalizedQuery)
        ));
}


export async function getPurchaseOrderId(
    purchaseOrderId: string
): Promise<AllPurchaseOrderDataView | undefined> {
    return mockAllPurchaseOrderDataView.find(
        (delivery) => (
            delivery.purchaseOrderId === purchaseOrderId
        ));
}


export async function getPurchaseOrderLine(
    purchaseOrderId: string,
    purchaseOrderLine: number
): Promise<AllPurchaseOrderDataView | undefined> {
    return mockAllPurchaseOrderDataView.find(
        (delivery) => (
            delivery.purchaseOrderId === purchaseOrderId &&
            delivery.purchaseOrderLine === purchaseOrderLine
        ));
}


export async function getPurchaseOrderDelivery(
    purchaseOrderId: string,
    purchaseOrderLine: number,
    purchaseOrderDelivery: number
): Promise<AllPurchaseOrderDataView | undefined> {
    return mockAllPurchaseOrderDataView.find(
        (delivery) => (
            delivery.purchaseOrderId === purchaseOrderId &&
            delivery.purchaseOrderLine === purchaseOrderLine && 
            delivery.purchaseOrderDelivery === purchaseOrderDelivery
        ));
}