import { Container } from "./style";

export function TransactionTable () {
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
        <tr>
           <td>Webdesign</td>
           <td className="deposit">€12.000</td>
           <td>Design</td>
           <td>02/01/2021</td>
          </tr>

          <tr>
           <td>Rent</td>
           <td className="withdraw">- €1.000</td>
           <td>Home</td>
           <td>31/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}