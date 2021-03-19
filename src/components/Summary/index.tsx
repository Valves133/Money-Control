import incomeImg  from '../../assets/income.svg';
import outcomeImg  from '../../assets/outcome.svg';
import totalImg  from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./style";

export function Summary () {
  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc, transition) => {
    if (transition.type === 'deposit'){
      acc.deposits += transition.amount;
      acc.total += transition.amount;
    }else {
      acc.withdraw += transition.amount;
      acc.total -= transition.amount;
    }
    return acc;
  },{
    deposits: 0,
    withdraw: 0,
    total: 0,
  })

  return(
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income"/>
        </header>
        <strong>{ new Intl.NumberFormat('es-ES', {
                    style: 'currency',
                    currency: 'EUR'
                  }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome"/>
        </header>
        <strong>- { new Intl.NumberFormat('es-ES', {
                    style: 'currency',
                    currency: 'EUR'
                  }).format(summary.withdraw)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>{ new Intl.NumberFormat('es-ES', {
                    style: 'currency',
                    currency: 'EUR'
                  }).format(summary.total)}</strong>
      </div>
      
    </Container>
  )
}