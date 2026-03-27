export default class Cl_vEmpresa {
  lblMontoTotal: HTMLElement;
  lblPorcentaje: HTMLElement;
  lblDetalle: HTMLElement;
  btNuevoPersonal: HTMLButtonElement;

  constructor() {
    this.btNuevoPersonal = document.getElementById("main_btNuevoPersonal") as HTMLButtonElement;
    this.lblMontoTotal = document.getElementById("main_lblMontoTotal") as HTMLElement;
    this.lblPorcentaje = document.getElementById("main_lblPorcentaje") as HTMLElement;
    this.lblDetalle = document.getElementById("main_lblDetalle") as HTMLElement;
  }

  reportar({ aumentoIndividual, nombre, totalEmpresa, porcentaje }: 
    { aumentoIndividual: number; nombre: string; totalEmpresa: number; porcentaje: number }): void {
    this.lblDetalle.innerHTML += `${nombre} tiene un aumento de $${aumentoIndividual}<br>`;
    this.lblMontoTotal.innerHTML = `${totalEmpresa.toFixed(2)}`;
    this.lblPorcentaje.innerHTML = `${porcentaje.toFixed(2)}%`;
  }
}