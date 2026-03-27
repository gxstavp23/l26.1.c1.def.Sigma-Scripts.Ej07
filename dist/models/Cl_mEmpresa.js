export default class Cl_mEmpresa {
    acMontoAdicional;
    acNominaTotal;
    constructor() {
        this.acMontoAdicional = 0;
        this.acNominaTotal = 0;
    }
    procesarPersonal(p) {
        this.acMontoAdicional += p.aumento();
        this.acNominaTotal += p.sueldo;
    }
    totalMontoAdicional() {
        return this.acMontoAdicional;
    }
    porcentajeAumentoSobreNomina() {
        if (this.acNominaTotal === 0)
            return 0;
        return (this.acMontoAdicional / this.acNominaTotal) * 100;
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map