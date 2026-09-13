import { AllPurchaseOrderDataView } from "@/lib/definitions";
import { mockAllPurchaseOrderDataView } from "@/lib/data/mock-data";


export async function getPurchaseOrderDeliveries(): Promise<AllPurchaseOrderDataView[]> {
    return mockAllPurchaseOrderDataView;
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