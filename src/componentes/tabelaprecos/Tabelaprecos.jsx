import React from "react";
import { TabelaPrecosDiv } from "./TabelaprecosStyle";

export const TabelaPrecos = () => {
    return(
        <TabelaPrecosDiv id="valores">
            <table>
                <tr>
                    <th>n° de alunos</th>
                    <th>Mensal</th>
                    <th>Trimestral</th>
                    <th>Semestral</th>
                    <th>Anual</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>R$ 180,00</td>
                    <td>R$ 170,00</td>
                    <td>R$ 160,00</td>
                    <td>R$ 150,00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>R$ 150,00</td>
                    <td>R$ 140,00</td>
                    <td>R$ 130,00</td>
                    <td>R$ 120,00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>R$ 140,00</td>
                    <td>R$ 130,00</td>
                    <td>R$ 120,00</td>
                    <td>R$ 110,00</td>
                </tr>
            </table>
            <p>Os descontos referentes a matrícula a partir de dois alunos são válidos por 3 meses a contar da data da matrícula.</p>
        </TabelaPrecosDiv>
    )
}