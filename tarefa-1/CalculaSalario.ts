import { Cargos } from "./enum/cargos";

export default class CalculaSalario {
    protected salarioBase: number;

    constructor(){
        this.salarioBase = 1000;
    }
    calcular(cargo: Cargos) {
        if (cargo === Cargos.Estagiario) {
            return this.salarioBase * 1.2;
        }

        else if (cargo === Cargos.Junior) {
            return this.salarioBase * 3;
        }

        else if (cargo === Cargos.Pleno) {
            return this.salarioBase * 5;
        }

        else if (cargo === Cargos.Senior) {
            return this.salarioBase * 7;
        }
        return 0;
    }
}