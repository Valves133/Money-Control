import incomeImg  from '../../assets/income.svg';
import outcomeImg  from '../../assets/outcome.svg';
import totalImg  from '../../assets/total.svg';

import { Container } from "./style";

export function Summary () {
  return(
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income"/>
        </header>
        <strong>€1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome"/>
        </header>
        <strong>- €240,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>€760,00</strong>
      </div>
      
    </Container>
  )
}