# All Products
POST http://localhost/api/products (Skapa produkt)
GET http://localhost/api/products (Hämta alla produkter)

# Specific products
GET http://localhost/api/products/:articleNumber (Hämta en specifik produkt utifrån _id)
PUT http://localhost/api/products/:articleNumber (Uppdatera specifik produkt)
DELETE http://localhost/api/products/:articleNumber (Radera specifik produkt)

# Tags
GET http://localhost/api/products/tags/:tag (Hämta alla produkter med specifik tag)
GET http://localhost/api/products/tags/:tag/:take (Hämta en viss mängd produkter med specifik tag)