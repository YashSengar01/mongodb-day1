# MongoDB Compass Queries

This document contains **copy-paste ready MongoDB Compass queries** for common product-related operations.

**Collection Name:** `products`

---

## 1. Find all information about each product

**Filter**

```json
{}
```

---

## 2. Find products with price between 400 and 800

**Filter**

```json
{
  "price": { "$gte": 400, "$lte": 800 }
}
```

---

## 3. Find products with price NOT between 400 and 600

**Filter**

```json
{
  "price": { "$not": { "$gte": 400, "$lte": 600 } }
}
```

---

## 4. List four products with price greater than 500

**Filter**

```json
{
  "price": { "$gt": 500 }
}
```

**Options → Limit**

```
4
```

---

## 5. Find product name and product material of each product

**Filter**

```json
{}
```

**Project**

```json
{
  "product_name": 1,
  "product_material": 1,
  "_id": 0
}
```

---

## 6. Find the product with row id of 10

**Filter**

```json
{
  "id": 10
}
```

---

## 7. Find only the product name and product material

**Filter**

```json
{}
```

**Project**

```json
{
  "product_name": 1,
  "product_material": 1,
  "_id": 0
}
```

---

## 8. Find all products which contain the value "soft" in product material

**Filter (Exact match)**

```json
{
  "product_material": "soft"
}
```

**Filter (Case-insensitive search)**

```json
{
  "product_material": { "$regex": "soft", "$options": "i" }
}
```

---

## 9. Find products with product color "indigo" and price 492.00

**Filter**

```json
{
  "product_color": "indigo",
  "price": 492.00
}
```

---

## 10. Delete products whose price is 28

⚠️ **MongoDB Compass Steps**

1. Go to **Documents** tab
2. Apply this filter:

```json
{
  "price": 28
}
```

3. Click **DELETE MANY**

---

✅ Ready to paste into a **GitHub README.md**
