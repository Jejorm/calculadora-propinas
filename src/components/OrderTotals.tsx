import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import type { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  dispatch: React.Dispatch<OrderActions>
}

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {
  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + item.price * item.quantity, 0), [order])

  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, subTotalAmount])

  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tipAmount, subTotalAmount])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotalAmount)}</span></p>
        <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
        <p>Total a Pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>
      </div>
      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 cursor-pointer disabled:opacity-10 disabled:cursor-not-allowed" disabled={totalAmount === 0} onClick={() => dispatch({ type: 'PLACE_ORDER' })}>Guardar Orden</button>
    </>
  )
}
