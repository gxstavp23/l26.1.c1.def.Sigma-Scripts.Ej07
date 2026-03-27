import Cl_mPersonal from "./Cl_mPersonal.js";

export default class Cl_mEmpresa {
  private acMontoAdicional: number;
  private acNominaTotal: number;

  constructor() {
    this.acMontoAdicional = 0;
    this.acNominaTotal = 0;
  }

  procesarPersonal(p: Cl_mPersonal): void {
    this.acMontoAdicional += p.aumento();
    this.acNominaTotal += p.sueldo;
  }

  totalMontoAdicional(): number { 
    return this.acMontoAdicional; 
  }

  porcentajeAumentoSobreNomina(): number {
    if (this.acNominaTotal === 0) return 0;
    return (this.acMontoAdicional / this.acNominaTotal) * 100;
  }
}