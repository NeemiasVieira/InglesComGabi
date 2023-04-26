import React from "react";
import { FormMat } from "./FormMatriculaStyle";

export const FormMatricula = () => {
    return(
        <FormMat>
            <div className="formulario">
                <label htmlFor="">Nome</label>
                <input type="text" name="" id="" placeholder="Digite o seu nome"/>
                <label htmlFor="">Quantidade de alunos</label>
                <select name="" id="">
                    <option value="">Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <label htmlFor="">Tipo de pagamento</label>
                <select>
                    <option value="">Selecione</option>
                    <option value="mensal">Mensal</option>
                    <option value="trimestral">Trimestral</option>
                    <option value="semestral">Semestral</option>
                    <option value="anual">Anual</option>
                </select>
                <button type="submit">Enviar inscrição</button>

            </div>
        </FormMat>
    )
}