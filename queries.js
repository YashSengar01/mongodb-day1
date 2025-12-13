## MongoDB Day 1 Queries (Using MongoDB Compass)

1. Find all products
{}

2. Price between 400 and 800
{ "product_price": { "$gte": 400, "$lte": 800 } }

3. Price not between 400 and 600
{ "product_price": { "$not": { "$gte": 400, "$lte": 600 } } }

4. Price > 500 (limit 4)
{ "product_price": { "$gt": 500 } }

5. Product name and material
{ "product_name": 1, "product_material": 1, "_id": 0 }

6. Product with id 10
{ "id": "10" }

7. Only name and material
{ "product_name": 1, "product_material": 1, "_id": 0 }

8. Material Soft
{ "product_material": "Soft" }

9. Color indigo & price 492
{ "product_color": "indigo", "product_price": 492.00 }

10. Delete price = 28
{ "product_price": 28 }
