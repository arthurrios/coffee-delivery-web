import { ShoppingCart } from '@phosphor-icons/react'
import { CoffeeDTO } from '../../dtos/CoffeeDTO'
import { QuantityCounter } from '../QuantityCounter'
import {
  Buy,
  CardContainer,
  CoffeeImg,
  CoffeeQuantity,
  Price,
  PriceContainer,
  Tag,
  TagsContainer,
} from './styles'
import { useTheme } from 'styled-components'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'

interface CardProps {
  data: CoffeeDTO
}

export function Card({ data }: CardProps) {
  const { addNewItemToCart } = useCart()
  const { COLORS } = useTheme()

  const [quantity, setQuantity] = useState(1)

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddToCart() {
    setQuantity(1)
    addNewItemToCart({
      id: data.id,
      image: data.image,
      name: data.name,
      price: data.price,
      quantity,
    })
  }

  return (
    <CardContainer>
      <div>
        <CoffeeImg src={data.image} />
        <TagsContainer>
          {data.categories.map((category) => {
            return (
              <Tag key={category}>
                <span>{category}</span>
              </Tag>
            )
          })}
        </TagsContainer>
        <h1>{data.name}</h1>
        <span>{data.description}</span>
      </div>
      <Buy>
        <PriceContainer>
          <span>$</span>
          <Price>{data.price.toFixed(2)}</Price>
        </PriceContainer>
        <CoffeeQuantity>
          <QuantityCounter
            quantity={quantity}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" color={COLORS.BASE_CARD} />
          </button>
        </CoffeeQuantity>
      </Buy>
    </CardContainer>
  )
}
