// 1. Find all information about each product
{}



// 2. Find products with price between 400 and 800
{
  "price": { "$gte": 400, "$lte": 800 }
}



// 3. Find products with price NOT between 400 and 600
{
  "price": { "$not": { "$gte": 400, "$lte": 600 } }
}



// 4. List four products with price greater than 500
{
  "price": { "$gt": 500 }
}
// Limit: 4



// 5. Find product name and product material of each product
// Filter
{}
// Projection
{
  "product_name": 1,
  "product_material": 1,
  "_id": 0
}



// 6. Find the product with row id of 10
{
  "id": 10
}



// 7. Find only the product name and product material
// Filter
{}
// Projection
{
  "product_name": 1,
  "product_material": 1,
  "_id": 0
}



// 8. Find all products which contain value "soft" in product material
{
  "product_material": { "$regex": "soft", "$options": "i" }
}



// 9. Find products with product color "indigo" and price 492.00
{
  "product_color": "indigo",
  "price": 492.00
}



// 10. Delete products whose price is 28
{
  "price": 28
}
