import { Cargos } from "./enum/cargos";
import Colaborador from "./Colaborador";

export default class QuadroFuncionarios {
    private _colaboradores: Colaborador[];
    constructor() {
        this._colaboradores = [];
    }

    contratarColaborador(colaborador: Colaborador): void {
        this._colaboradores.push(colaborador);
    }

    demitirColaborador(colaboradorChave: Colaborador): void {
        this._colaboradores = this._colaboradores.filter((colaborador) => colaborador !== colaboradorChave);
    }

    get getColaboradores(): Colaborador[] {
        return this._colaboradores;
    }
}