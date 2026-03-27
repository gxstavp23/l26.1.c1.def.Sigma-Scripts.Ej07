export default class Cl_vEmpresa {
    lblMontoTotal;
    lblPorcentaje;
    lblDetalle;
    btNuevoPersonal;
    constructor() {
        this.btNuevoPersonal = document.getElementById("main_btNuevoPersonal");
        this.lblMontoTotal = document.getElementById("main_lblMontoTotal");
        this.lblPorcentaje = document.getElementById("main_lblPorcentaje");
        this.lblDetalle = document.getElementById("main_lblDetalle");
    }
    reportar({ aumentoIndividual, nombre, totalEmpresa, porcentaje }) {
        this.lblDetalle.innerHTML += `${nombre} tiene un aumento de $${aumentoIndividual}<br>`;
        this.lblMontoTotal.innerHTML = `${totalEmpresa.toFixed(2)}`;
        this.lblPorcentaje.innerHTML = `${porcentaje.toFixed(2)}%`;
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map