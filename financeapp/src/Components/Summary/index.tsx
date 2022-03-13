import { Container } from "./style";
import incomeImage  from '../../assets/income.svg';
import outcome  from '../../assets/outcome.svg';
import total  from '../../assets/total.svg';

export function Summary(){
    return(
        <Container>
            <div className="container-entrada">
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage}  alt="Entradas" />
                </header>
                <strong>R$ 10.000,00</strong>
            </div>

            <div className="container-saida">
                <header>
                    <p>Saídas</p>
                    <img src={outcome}  alt="Saídas" />
                </header>
                <strong>R$ 8.000,00</strong>
            </div>

            <div className="container-total">
                <header>
                    <p>Total</p>
                    <img src={total}  alt="Entradas" />
                </header>
                <strong>R$ 2.000,00</strong>
            </div>
        </Container>
    );
}