import type { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  dispatch: React.Dispatch<OrderActions>
}

export function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between cursor-pointer hover:bg-teal-200"
      onClick={() => dispatch({ type: 'ADD_ITEM', payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
