export interface PurchaseOrder {
  purchaseOrderId: string;
  siteName: string;
  supplierName: string;
  orderDate: string;
  buyerName: string;
};

export interface PurchaseOrderLine {
    purchaseOrderId: string;
    purchaseOrderLine: number;
    partId: string;
    unitCost: number;
}

export interface PurchaseOrderDelivery {
    purchaseOrderId: string;
    purchaseOrderLine: number;
    purchaseOrderDelivery: number;
    promiseDate: string;
    expectedDate: string;
    quantity: number;
}

export interface PurchaseOrderDeliveryView {
    purchaseOrderDeliveryId: string;

    purchaseOrderId: string;
    purchaseOrderLine: number;
    purchaseOrderDelivery: number;

    siteName: string;
    supplierName: string;
    orderDate: string;
    buyerName: string;

    partId: string;
  
    expectedDate: string;
    quantity: number;

    extCostCents: number;
}