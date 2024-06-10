# Batch-3-Assignment-2

Objective: Develop a Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for effective data management. Ensure data integrity through validation using Joi/Zod.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/nisherahmed/eCommerce

   ```

2. Navigate to the project directory:

   ```bash
   npm install
   # or
   yarn
   ```

3. First, run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

## DotENV Configuration
 ```bash
   NODE_ENV=development
   DB_URL=mongodb://localhost:27017
   PORT=5000
   ```



## API Reference

#### 1. Create a New Product

```http
  POST /api/products
```
- Request Body:

```json
{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}
```
- Response:

```json
{
    "success": true,
    "message": "Product created successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
}
```

#### 2. Retrieve a List of All Products

```http
  GET /api/products
```
- Response

```json
{
    "success": true,
    "message": "Products fetched successfully!",
    "data": [
        {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "Samsung Galaxy S21",
            "description": "High-performance Android smartphone with advanced camera capabilities.",
            "price": 799,
            "category": "Electronics",
            "tags": ["smartphone", "Samsung", "Android"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Phantom Black"
                },
                {
                    "type": "Storage Capacity",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 30,
                "inStock": true
            }
        }
        // Additional products can be added here...
    ]
}
```

#### 3. Retrieve a Specific Product by ID

```http
  GET /api/products/:productId
```
- Response

```json
{
    "success": true,
    "message": "Product fetched successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
}
```

#### 4. Update Product Information

```http
  PUT /api/products/:productId
```
- Request Body:
```json
{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}
```
- Response

```json
{
    "success": true,
    "message": "Product updated successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 49,
            "inStock": true
        }
    }
}
```

#### 5. Delete a Product

```http
  PUT /api/products/:productId

- Response: 

```json
{
    "success": true,
    "message": "Product deleted successfully!",
    "data": null
 }
 
// The product should be deleted from the database.
```
