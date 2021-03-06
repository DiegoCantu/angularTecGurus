import { Articulo } from "./articulo";
export class Electronico implements Articulo {
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
    return this.precio * 0.8;
  }
  subir(): any {}
}
