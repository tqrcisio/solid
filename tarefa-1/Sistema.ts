import { Cargos } from "./enum/cargos";
import QuadroFuncionarios from "./QuadroFuncionarios";
import CalculaSalario from "./CalculaSalario";


export default class Sistema {
    private servicoCalculaSalario: CalculaSalario;
    private _colaboradores: QuadroFuncionarios;
    constructor() {
        this._colaboradores = new QuadroFuncionarios();
        this.servicoCalculaSalario = new CalculaSalario();
    }
    gerarJson() {
        let colaboradores = this._colaboradores.getColaboradores;
        let relatorio = colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.servicoCalculaSalario.calcular(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };
}



