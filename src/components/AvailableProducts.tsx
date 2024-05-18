import { useCartStore } from "../store/CartStore";

export const AvailableProducts = () => {
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ]);

  return (
    <>
      <div className="flex flex-col mb-3">
        <h1 className="text-xl font-bold">Escolha o Produto</h1>
        <ul className="flex flex-col space-y-3">
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button
                className="bg-slate-800 text-white p-1 rounded-md ml-2"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
