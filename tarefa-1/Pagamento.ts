import { Cargos } from "./enum/cargos";
import Colaborador from "./Colaborador";
import CalculaSalario from "./CalculaSalario";

export default class Pagamento {    
    private _colaboradores: Colaborador[];
    private servicoCalculaSalario: CalculaSalario;

    constructor() {
        this._colaboradores = [];
        this.servicoCalculaSalario = new CalculaSalario();
    }

    pagaColaborador(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalculaSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}