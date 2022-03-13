import {useEffect} from 'react';
import {api} from '../../services/api';
import {Container} from './style';

export function TrasanctionTable() {
  useEffect(() => {
    api.get('transactions')
    .then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$1.000,00</td>
            <td>Trablaho freelancer</td>
            <td>10/03/2022</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td className="deposit">R$4.000,00</td>
            <td>Tarbalho</td>
            <td>05/03/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$2.000,00</td>
            <td>Casa</td>
            <td>13/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
