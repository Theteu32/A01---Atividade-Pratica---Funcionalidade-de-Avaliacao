import { Product } from "./classes/Product";
import { User } from "./classes/User";

const matheus = new User("matheus", "Theus", "Matheusdesouzao32@gmail.com");

const shoe = new Product("Air Jordan", 1000)

shoe.comment("O tênis mais lindo que tem", matheus)

shoe.rate(5, matheus)

// shoe.show()

const anderson = new User("anderson", "professor", "professor@gmail.com");

shoe.comment("horrive, mto carro", anderson)

shoe.rate(1, anderson)

shoe.show()
