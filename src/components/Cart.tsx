import { useCartStore } from "../store/CartStore";

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <>
      <div className="flex flex-col mb-3">
        <ul className="flex flex-col space-y-3">
          <h1 className="text-xl font-bold">Remover Itens</h1>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button
                className="bg-slate-800 text-white p-1 rounded-md ml-2"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
