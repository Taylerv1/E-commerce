# Academic E-Commerce Project

Minimal e-commerce project built with:

- Frontend: React + Vite
- Backend: Django + Django REST Framework
- Admin: Django Admin
- Database: SQLite
- Payment: mock only

## Implemented Scope

- Product browsing
- Category browsing
- Product search, filtering, sorting, and pagination
- Product details
- User registration and JWT login
- User profile update
- Address management
- Authenticated cart
- Stock validation
- Checkout with mock payment
- Order history
- Contact form
- Django Admin management for products, categories, orders, users, and contact messages

## Excluded Features

The project intentionally excludes:

- Next.js
- Custom admin dashboard
- PostgreSQL
- Stripe or real payment
- Coupons
- Wishlist
- Reviews and ratings
- Email notifications
- Advanced analytics dashboard

## Backend Setup

From the project root:

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe backend\manage.py migrate
.\.venv\Scripts\python.exe backend\manage.py createsuperuser
.\.venv\Scripts\python.exe backend\manage.py runserver
```

Backend URL:

```text
http://127.0.0.1:8000
```

Django Admin:

```text
http://127.0.0.1:8000/admin/
```

## Frontend Setup

Open a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://127.0.0.1:5173/
```

## Main API Endpoints

Products:

```text
GET /api/categories/
GET /api/products/
GET /api/products/<id>/
```

Authentication:

```text
POST /api/auth/register/
POST /api/auth/login/
```

Account:

```text
GET /api/profile/
PATCH /api/profile/
GET /api/addresses/
POST /api/addresses/
PATCH /api/addresses/<id>/
DELETE /api/addresses/<id>/
```

Cart:

```text
GET /api/cart/
POST /api/cart/items/
PATCH /api/cart/items/<id>/
DELETE /api/cart/items/<id>/
```

Orders:

```text
POST /api/orders/checkout/
GET /api/orders/
GET /api/orders/<id>/
```

Contact:

```text
POST /api/contact/
```

## Manual Test Checklist

1. Create categories and products from Django Admin.
2. Open the React app and browse products.
3. Register a new user.
4. Login.
5. Update profile.
6. Add an address.
7. Add a product to cart.
8. Update cart quantity.
9. Checkout with mock payment.
10. Confirm stock is reduced in Django Admin.
11. Confirm order appears in account order history.
12. Submit a contact message.
13. Confirm contact message appears in Django Admin.

## Useful Commands

Backend check:

```powershell
.\.venv\Scripts\python.exe backend\manage.py check
.\.venv\Scripts\python.exe backend\manage.py makemigrations --check --dry-run
```

Frontend build:

```powershell
cd frontend
npm run build
```
