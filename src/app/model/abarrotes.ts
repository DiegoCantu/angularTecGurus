import { Articulo } from "./articulo";
export class Abarrotes implements Articulo {
  precio: number;
  descripcion: string;
  categoria: string;
  titulo: string;

  constructor(
    precio: number,
    description: string,
    categoria: string,
    titulo: string
  ) {
    this.precio = precio;
    this.descripcion = description;
    this.categoria = categoria;
    this.titulo = titulo;
  }

  calcularDescuento(): number {
    return this.precio * 0.4;
  }
  subir(): any {}
}
