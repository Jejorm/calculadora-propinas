import type { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';
import type { OrderActions } from "../reducers/order-reducer";

type OrderConentsProps = {
  order: OrderItem[]
  dispatch: React.Dispatch<OrderActions>
}

export default function OrderContents({ order, dispatch }: OrderConentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5">
        {
          order.map(item => (
            <div key={item.id} className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b">
              <div>

                <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
              </div>
              <button className="bg-red-600 h-8 w-8 rounded-full text-white cursor-pointer font-black" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}>X</button>
            </div>
          )
          )}
      </div>
    </div>
  )
}
