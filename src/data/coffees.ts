import { CoffeeDTO } from '../dtos/CoffeeDTO'

export const coffees: CoffeeDTO[] = [
  {
    name: 'Espresso',
    description: 'Traditional coffee made with hot water and ground beans.',
    category: ['traditional'],
    price: 3.5,
    image: '../assets/coffees/espresso.png',
  },
  {
    name: 'Americano',
    description: 'Diluted espresso, less intense than the traditional one.',
    category: ['traditional'],
    price: 3.5,
    image: '../assets/coffees/americano.png',
  },
  {
    name: 'Creamy',
    description: 'Traditional espresso coffee with creamy foam.',
    category: ['traditional'],
    price: 3.5,
    image: '../assets/coffees/creamy-espresso.png',
  },
  {
    name: 'Cold',
    description: 'Beverage prepared with espresso and ice cubes.',
    category: ['traditional', 'cold'],
    price: 3.5,
    image: '../assets/coffees/iced-coffee.png',
  },
  {
    name: 'Milky',
    description: 'Half and half of traditional espresso with steamed milk.',
    category: ['traditional', 'with milk'],
    price: 3.5,
    image: '../assets/coffees/milky-espresso.png',
  },
  {
    name: 'Latte',
    description:
      'A shot of espresso with twice the amount of milk and creamy foam.',
    category: ['traditional', 'with milk'],
    price: 3.5,
    image: '../assets/coffees/latte.png',
  },
  {
    name: 'Capuccino',
    description:
      'Drink with cinnamon made of equal parts of coffee, milk, and foam.',
    category: ['traditional', 'with milk'],
    price: 3.5,
    image: '../assets/coffees/capuccino.png',
  },
  {
    name: 'Macchiato',
    description: 'Espresso mixed with a little hot milk and foam.',
    category: ['traditional', 'with milk'],
    price: 3.5,
    image: '../assets/coffees/macchiato.png',
  },
  {
    name: 'Mocaccino',
    description: 'Espresso with chocolate syrup, little milk, and foam.',
    category: ['traditional', 'with milk'],
    price: 3.5,
    image: '../assets/coffees/mochaccino.png',
  },
  {
    name: 'Hot Cocoa',
    description:
      'Beverage made with chocolate dissolved in hot milk and coffee.',
    category: ['special', 'with milk'],
    price: 3.5,
    image: '../assets/coffees/hot-chocolate.png',
  },
  {
    name: 'Cuban',
    description: 'Cold espresso drink with rum, cream, and mint.',
    category: ['special', 'alcoholic', 'cold'],
    price: 3.5,
    image: '../assets/coffees/cuban.png',
  },
  {
    name: 'Hawaiian',
    description: 'Sweetened beverage prepared with coffee and coconut milk.',
    category: ['special'],
    price: 3.5,
    image: '../assets/coffees/hawaiian.png',
  },
  {
    name: 'Arabic',
    description: 'Beverage prepared with Arabica coffee beans and spices.',
    category: ['special'],
    price: 3.5,
    image: '../assets/coffees/arabic.png',
  },
  {
    name: 'Irish',
    description:
      'Beverage based on coffee, Irish whiskey, sugar, and whipped cream.',
    category: ['special', 'alcoholic'],
    price: 3.5,
    image: '../assets/coffees/irish.png',
  },
]
