# Menu-Manager: MongoDB, ExpressJS, NodeJS based Menu Manager

## 🚀 Overview
This is a MongoDB, NodeJS, Express based menu management system

### **Video explanation**

```
https://www.loom.com/share/41cf6a2e89984526ada5840642558f2b?sid=4be1e7d0-68f4-47c7-afb9-f3276759b4e9
```

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
MONGO_URI="mongodb://localhost/menudb"
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

Access the application at `http://localhost:3000`

### **Categories**

```bash
# Get all Categories
GET /api/category/
```

![get_categories](https://github.com/user-attachments/assets/419dad41-5151-4e18-be7b-98e1820a5613)

```bash
# Get Category by id
GET /api/category/:id
```

![get_one_cat](https://github.com/user-attachments/assets/1d6b9ebc-ed9b-4753-a39a-86052ecbbd74)

```bash
# Create Category 
POST /api/category/
```

![post_one_cat](https://github.com/user-attachments/assets/191bdff3-add7-48ae-aedb-9e399f596510)

```bash
# Delete Category
DELETE /api/category/:id
```

![del_cat](https://github.com/user-attachments/assets/0be43ba4-e3e6-4fa6-9016-6a46ef8680f7)

```bash
# Edit Category 
PATCH /api/category/:id
```

![update_cat](https://github.com/user-attachments/assets/3e10a44d-422a-4624-81c7-fe47b8caa9ca)

### **Subategories**

```bash
# Get all Subategories
GET /api/subcategory/
```

![get_subcats](https://github.com/user-attachments/assets/69b6ec69-08b2-4792-921f-54b5db2bb630)

```bash
# Get Subcatgory by id
GET /api/subcategory/:id
```

![get_one_subcat](https://github.com/user-attachments/assets/a11eb761-a8e1-481c-856d-2eae5328da61)

```bash
# Create Subcategory 
POST /api/subcategory/
```

![create_subcat](https://github.com/user-attachments/assets/cc228ac8-5316-4b87-8450-cfbb3ffd2ea5)

```bash
# Delete subcategory
DELETE /api/subcategory/:id
```

![delete_subcat](https://github.com/user-attachments/assets/3efc227e-39b4-4488-8b27-11de7d55a863)

```bash
# Edit category 
PATCH /api/subcategory/:id
```

![update_sub](https://github.com/user-attachments/assets/dfbf1c3c-cf73-4c2a-afb7-4f9eb9bc3570)


### **Items**

```bash
# Get all Items
GET /api/item/
```
![get_items](https://github.com/user-attachments/assets/a28e646f-57c0-44e1-b6f0-6c6d5feda058)

```bash
# Get Item by id
GET /api/item/:id
```

![get_one_item](https://github.com/user-attachments/assets/7a30c61c-7568-4a07-bfb0-dfedb1ca8574)

```bash
# Create Item
POST /api/item/
```

![create_item](https://github.com/user-attachments/assets/2f08ebe2-c7f7-4b18-adad-0b7ed4407418)

```bash
# Edit Item 
PATCH /api/Item/:id
```

![update_item](https://github.com/user-attachments/assets/4f302c39-ae10-45cb-aefb-5d76375e7fb4)

```bash
# Delete Item
DELETE /api/item/:id
```

![delete_item](https://github.com/user-attachments/assets/75a992c8-2812-4695-a5c7-7e3fda1ad829)

```bash
# Search Item by name
DELETE /api/item/search/:name
```

![search_item](https://github.com/user-attachments/assets/e0c7b011-dd98-428c-ae14-5fa978498b28)
