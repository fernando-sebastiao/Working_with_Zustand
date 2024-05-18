import { create } from "zustand";

//Dados gerados por uma API fornecida pelo Chat GPT

const initialItems = [
  {
    id: "p1",
    name: "Wireless Bluetooth Earbuds",
    price: 49.99,
  },
  {
    id: "p2",
    name: "Smartphone Wolder and Stand",
    price: 12.99,
  },
  {
    id: "p3",
    name: "Stainless Steel Water Bottle",
    price: 19.45,
  },
];

type Item = {
  id: string;
  name: string;
  price: number;
};

type CartStore = {
  availableItems: Item[];
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems: initialItems,
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id != id) })),
  };
});

//Another example about how to wark with that

const coisasFeitas = [
  {
    id: "p4",
    name: "Batata",
    preco: 12.12,
  },
  {
    id: "p54",
    name: "Cenoura",
    preco: 12.45,
  },
  {
    id: "p3e",
    name: "Pimenta",
    preco: 459.12,
  },
];

console.log(coisasFeitas);

//Tipagens dos tipos de propriedades que serão recebidas
type esquema = {
  id: string;
  name: string;
  preco: number;
};

type CoisasdoCarro = {
  ItensPermitidos: esquema[];
  carro: esquema[];
  adicionar: (coisa: esquema) => void;
  removerDoCarro: (id: string) => void;
};

export const seraUsada = create<CoisasdoCarro>((alterar) => {
  return {
    carro: [],
    ItensPermitidos: coisasFeitas,
    adicionar: (coisa) =>
      alterar((continuar) => ({ carro: [...continuar.carro, coisa] })),
    removerDoCarro: (id) =>
      alterar((valor) => ({
        carro: valor.carro.filter((dado) => dado.id != id),
      })),
  };
});
