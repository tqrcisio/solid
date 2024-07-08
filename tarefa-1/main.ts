import Colaborador from "./Colaborador";
import QuadroFuncionarios from "./QuadroFuncionarios";
import Sistema from "./Sistema";
import Pagamento from "./Pagamento";
import { Cargos } from "./enum/cargos";

const quadrofunc = new QuadroFuncionarios();
const sistema = new Sistema();
const pagamento = new Pagamento();


const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadrofunc.contratarColaborador(colaborador1);
quadrofunc.contratarColaborador(colaborador2);
quadrofunc.contratarColaborador(colaborador3);

console.log(sistema.gerarJson());

console.log(colaborador1);
pagamento.pagaColaborador(colaborador1);
console.log(colaborador1);