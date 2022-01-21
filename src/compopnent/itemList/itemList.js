
export const PRODUCTS = [
  {
    id:0,
    name: "Crema Ultra Hidratante",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit laborum debitis ipsum deserunt",
    precio: 2500
  },
  {
    id:1,
    name: "Crema Lifting",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit laborum debitis ipsum deserunt",
    precio: 1500
  },
  {
    id:2,
    name: "Crema Lifting y Rellenador",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit laborum debitis ipsum deserunt",
    precio: 2550
  },
];

export function getProductos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(PRODUCTS), 4000);
    });
}