# Menu-Manager: MongoDB, ExpressJS, NodeJS based Menu Manager

## 🚀 Overview
This is a MongoDB, NodeJS, Express based menu management system for Guestara

### **Key Features**
✅ Category Management: Create, retrieve, update, and delete categories with attributes such as name, image URL, description, tax applicability, tax amount, and tax type.     
✅ Subcategory Management: Handle subcategories under specific categories, inheriting tax properties by default, with options to override.  
✅ Item Management: Manage items under categories or subcategories, including details like name, image URL, description, tax applicability, base amount, discount, and total amount calculation.    
✅ Search Functionality: Search for items by name.  

---

## 🔎 Directory Structure

```
Menu-management-Guestara/
├── Backend/
│   ├── config/
│   │   └── mongo.js                    # mongodb connection
│   ├── controllers/
│   │   ├── category /                  # category CRUD operations
│   │   │   └── create_category.js     
│   │   │   └── delete_category.js
│   │   │   └── get_category.js
│   │   │   └── get_categories.js
│   │   │   └── update_category.js
│   │   ├── item/                       # item CRUD operations
│   │   │   └── get_items.js
│   │   │   └── get_item.js
│   │   │   └── update_item.js
│   │   │   └── delete_item.js
│   │   │   └── create_item.js
│   │   │   └── search_item.js
│   │   ├── subcategory/                # subcategory CRUD operations
│   │   │   └── get_sub.js
│   │   │   └── get_subs.js
│   │   │   └── delete_sub.js
│   │   │   └── create_sub.js
│   │   │   └── update_sub.js
│   ├── models/                         # FAQ MongoDB model
│   │   └── category.js                 # category model
│   │   └── subcategory.js              # subcategory model
│   │   └── item.js                     # item
│   ├── routes/                         # API routes
│   │   └── category_router.js    
│   │   └── item_router.js    
│   │   └── subcategory_router.js    
│   ├── middleware/
│   │   └── category_middleware.js      # Middleware to get Category by Id
│   │   └── item_middleware.js          # Middleware to get Item by Id
│   │   └── subcategory_middleware.js   # Middleware to get Subcategory by Id
│   ├── app.js                          # Express app setup
│   ├── .env                            # Environment variables
│   ├── package-lock.json
│   └── package.json
└── .gitignore
```

## 📌 Technologies Used

- Node.js
- Express.js
- MongoDB

## 📌 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) 


## 📌 **Installation Steps**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/sahil19-19/Menu-management-Guestara.git
cd Menu-management-Guestara
```

### **2️⃣ Install Dependencies**

```
npm install
```

### **3️⃣ Create .env file:**

```env
MONGO_URI="mongodb://localhost/faqdb"
PORT=3000
```

### **4️⃣ Start MongoDB**
MongoDB is run as a service in Windows and doesn't need to be stated/stopped manually
For linux (eg arch)
```
systemctl start mongodb.service
```

### **5️⃣ Start the server**
```
npm run dev  # To run using nodemon

node app.js  # To run simply
```

## 📌 **API Usage Examples**

Access the application at `http://localhost:3000`.

### **Categories**

```bash
# Get all Categories
GET /api/category/
```

```bash
# Get Category by id
GET /api/category/:id
```

```bash
# Create Category 
POST /api/category/
```

```bash
# Delete Category
DELETE /api/category/:id
```

```bash
# Edit Category 
PATCH /api/category/:id
```


### **Subategories**

```bash
# Get all Subategories
GET /api/subcategory/
```

```bash
# Get Subcatgory by id
GET /api/subcategory/:id
```

```bash
# Create Subcategory 
POST /api/subcategory/
```

```bash
# Delete subcategory
DELETE /api/subcategory/:id
```

```bash
# Edit category 
PATCH /api/subcategory/:id
```


### **Items**

```bash
# Get all Items
GET /api/item/
```

```bash
# Get Item by id
GET /api/item/:id
```

```bash
# Create Item
POST /api/item/
```

```bash
# Delete Item
DELETE /api/item/:id
```

```bash
# Edit Item 
PATCH /api/Item/:id
```

