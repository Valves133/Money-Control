import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./style";

export function TransactionTable () {
  const {transactions} = useTransactions();

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          { transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {//new Intl.DateTimeFormat().resolvedOptions().timeZone
                  new Intl.NumberFormat('es-ES', {
                    style: 'currency',
                    currency: 'EUR'
                  }).format(transaction.amount)
                }
              </td>
              <td>{transaction.category}</td>
              <td>{
               new Intl.DateTimeFormat('es-ES').format(new Date(transaction.createdAt))
              }</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </Container>
  )
}