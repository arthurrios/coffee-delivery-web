import { Banner } from './components/Banner'
import { CoffeeList } from './styles'

import { coffees } from '../../data/coffees'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <div>
      <Banner />
      <CoffeeList>
        <h2>Our coffees</h2>
        <div>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} data={coffee} />
          })}
        </div>
      </CoffeeList>
    </div>
  )
}
