import { CoffeeDTO } from '../dtos/CoffeeDTO'
import espressoImage from '../assets/coffees/espresso.png'
import americanoImage from '../assets/coffees/americano.png'
import creamyEspressoImage from '../assets/coffees/creamy-espresso.png'
import icedCoffeeImage from '../assets/coffees/iced-coffee.png'
import milkyEspressoImage from '../assets/coffees/coffee-and-milk.png'
import latteImage from '../assets/coffees/latte.png'
import capuccinoImage from '../assets/coffees/capuccino.png'
import macchiatoImage from '../assets/coffees/macchiato.png'
import mocaccinoImage from '../assets/coffees/mochaccino.png'
import hotChocolateImage from '../assets/coffees/hot-chocolate.png'
import cubanImage from '../assets/coffees/cuban.png'
import hawaiianImage from '../assets/coffees/hawaiian.png'
import arabicImage from '../assets/coffees/arabic.png'
import irishImage from '../assets/coffees/irish.png'

export const coffees: CoffeeDTO[] = [
  {
    id: '1',
    name: 'Espresso',
    description: 'Traditional coffee made with hot water and ground beans.',
    categories: ['traditional'],
    price: 3.5,
    image: espressoImage,
  },
  {
    id: '2',
    name: 'Americano',
    description: 'Diluted espresso, less intense than the traditional one.',
    categories: ['traditional'],
    price: 3.5,
    image: americanoImage,
  },
  {
    id: '3',
    name: 'Creamy',
    description: 'Traditional espresso coffee with creamy foam.',
    categories: ['traditional'],
    price: 3.5,
    image: creamyEspressoImage,
  },
  {
    id: '4',
    name: 'Cold',
    description: 'Beverage prepared with espresso and ice cubes.',
    categories: ['traditional', 'cold'],
    price: 3.5,
    image: icedCoffeeImage,
  },
  {
    id: '5',
    name: 'Milky',
    description: 'Half and half of traditional espresso with steamed milk.',
    categories: ['traditional', 'with milk'],
    price: 3.5,
    image: milkyEspressoImage,
  },
  {
    id: '6',
    name: 'Latte',
    description:
      'A shot of espresso with twice the amount of milk and creamy foam.',
    categories: ['traditional', 'with milk'],
    price: 3.5,
    image: latteImage,
  },
  {
    id: '7',
    name: 'Capuccino',
    description:
      'Drink with cinnamon made of equal parts of coffee, milk, and foam.',
    categories: ['traditional', 'with milk'],
    price: 3.5,
    image: capuccinoImage,
  },
  {
    id: '8',
    name: 'Macchiato',
    description: 'Espresso mixed with a little hot milk and foam.',
    categories: ['traditional', 'with milk'],
    price: 3.5,
    image: macchiatoImage,
  },
  {
    id: '9',
    name: 'Mocaccino',
    description: 'Espresso with chocolate syrup, little milk, and foam.',
    categories: ['traditional', 'with milk'],
    price: 3.5,
    image: mocaccinoImage,
  },
  {
    id: '10',
    name: 'Hot Cocoa',
    description:
      'Beverage made with chocolate dissolved in hot milk and coffee.',
    categories: ['special', 'with milk'],
    price: 3.5,
    image: hotChocolateImage,
  },
  {
    id: '11',
    name: 'Cuban',
    description: 'Cold espresso drink with rum, cream, and mint.',
    categories: ['special', 'alcoholic', 'cold'],
    price: 3.5,
    image: cubanImage,
  },
  {
    id: '12',
    name: 'Hawaiian',
    description: 'Sweetened beverage prepared with coffee and coconut milk.',
    categories: ['special'],
    price: 3.5,
    image: hawaiianImage,
  },
  {
    id: '13',
    name: 'Arabic',
    description: 'Beverage prepared with Arabica coffee beans and spices.',
    categories: ['special'],
    price: 3.5,
    image: arabicImage,
  },
  {
    id: '14',
    name: 'Irish',
    description:
      'Beverage based on coffee, Irish whiskey, sugar, and whipped cream.',
    categories: ['special', 'alcoholic'],
    price: 3.5,
    image: irishImage,
  },
]
