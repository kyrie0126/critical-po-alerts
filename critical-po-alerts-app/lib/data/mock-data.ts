import { faker } from "@faker-js/faker";
import { AllPurchaseOrderDataView } from "@/lib/definitions";

faker.seed(123)

const suppliers = [
    'Honeywell',
    'Acme Wires',
    'RTX',
    'Lockheed Martin',
    'American Circuits'
];

const sites = [
    'Creedmoor',
    'Chatsworth',
    'Staverton',
    'Cheltenham',
]

export const mockAllPurchaseOrderDataView: AllPurchaseOrderDataView[] = Array.from({ length: 20 }, (_, index) => {
    const purchaseOrderId: string = `PO${String(index + 10001).padStart(5, '0')}`;
    const purchaseOrderLine: number = faker.number.int({min: 1, max: 10});
    const purchaseOrderDelivery: number = faker.number.int({min: 1, max: 10});
    const purchaseOrderDeliveryId: string = `${purchaseOrderId}-${purchaseOrderLine}-${purchaseOrderDelivery}`;

    const expectedDate = faker.date.between({
      from: '2026-01-01',
      to: '2026-12-31',
    });

    const unitCostCents: number = faker.number.int({ min: 100, max: 10000});
    const quantity: number = faker.number.int({ min: 1, max: 100 });
    const extCostCents: number = unitCostCents * quantity

    return {
        purchaseOrderDeliveryId: purchaseOrderDeliveryId,
        purchaseOrderId: purchaseOrderId,
        purchaseOrderLine: purchaseOrderLine,
        purchaseOrderDelivery: purchaseOrderDelivery,

        siteName: faker.helpers.arrayElement(sites),
        supplierName: faker.helpers.arrayElement(suppliers),
        orderDate: faker.date.between({ from: '2025-01-01', to: '2025-12-31'}).toISOString().split('T')[0],
        buyerName: faker.person.firstName(),

        partId: `P-${String(faker.number.int({ min: 1, max: 5 })).padStart(3, '0')}`,
        
        expectedDate: expectedDate.toISOString().split('T')[0],
        quantity: quantity,
        extCostCents: extCostCents,
    };
})