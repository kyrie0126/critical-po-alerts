import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getPurchaseOrderDeliveries } from "@/lib/data/purchase-orders";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

export default async function PurchaseOrdersTable() {

    const purchaseOrderDeliveries = await getPurchaseOrderDeliveries();

    return (
        <Table>
            <TableCaption>A list of purchase order deliveries.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Delivery</TableHead>
                    <TableHead>Site</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Buyer</TableHead>
                    <TableHead>Part</TableHead>
                    <TableHead>Expected Date</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Ext Cost</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {purchaseOrderDeliveries.map((delivery) => (
                    <TableRow key={delivery.purchaseOrderDeliveryId}>
                        <TableCell className="font-medium">
                            <Link className="hover:text-primary"
                                href={`/purchase-orders/${delivery.purchaseOrderId}/${delivery.purchaseOrderLine}/${delivery.purchaseOrderDelivery}`}
                            >
                                {delivery.purchaseOrderDeliveryId}
                            </Link>
                        </TableCell>
                        <TableCell>{delivery.siteName}</TableCell>
                        <TableCell>{delivery.supplierName}</TableCell>
                        <TableCell>{delivery.orderDate}</TableCell>
                        <TableCell>{delivery.buyerName}</TableCell>
                        <TableCell>{delivery.partId}</TableCell>
                        <TableCell>{delivery.expectedDate}</TableCell>
                        <TableCell className="text-right">{delivery.quantity}</TableCell>
                        <TableCell className="text-right">{formatCurrency(delivery.extCostCents)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={8}>Total</TableCell>
                    <TableCell className="text-right">insert footer stuff</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}