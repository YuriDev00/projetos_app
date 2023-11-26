import Editora from "../modelo/Editora";
const editoras:Array<Editora>=[new Editora(1,"Alta books"),new Editora(2,"Peason"),new Editora(3,"addison Wesley")];
class ControleEditora{getEditoras():Array<Editora>{return editoras}
getNomeEditora(codEditora:number):string|undefined
{const editoraencontrada=editoras.find((editora)=>editora.codEditora===codEditora)
        return editoraencontrada?editoraencontrada.nome:undefined}


}
export default ControleEditora
