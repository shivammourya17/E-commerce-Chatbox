Chatbot

![GitHub](https://img.shields.io/github/licenseHub last commit](https://img.shields.io/github/last-commit/CodeFusionEhs language](https://img.shields.io/github/languages/top/CodeFusionEhsan/Chat Chatbot for Uplyft.ai Internship Assignment

Key Features

Interactive chatbot for e-commerce sales (smartphones)

Next.js frontend with Tailwind CSS, Framer Motion, and Lucide React

Django backend (project: backend, app: core) with SQLite database

Clerk authentication and authorization

Regex-based query parsing for customer questions

Fetch API connects frontend and backend

Home, Products, and Individual Product pages (App Router)

Demo mode: "Order" button is non-functional

Responsive, modern UI/UX

File Structure

text

Chatbot/

│

├── frontend/                # Next.js (App Router)

│   ├── app/

│   │   ├── layout.tsx

│   │   ├── page.tsx             # Home page

│   │   ├── products/

│   │   │   ├── page.tsx         # Products listing

│   │   │   └── [id]/

│   │   │       └── page.tsx     # Individual product page

│   │   ├── components/

│   │   │   ├── Chatbot.tsx

│   │   │   ├── ProductCard.tsx

│   │   │   ├── Navbar.tsx

│   │   │   └── ...

│   │   ├── sign-in/[[...sign-in]]/page.tsx

│   │   └── sign-up/[[...sign-up]]/page.tsx

│   ├── public/

│   ├── styles/

│   ├── .env.local               # Clerk keys here

│   └── ...

│

├── backend/                 # Django Project

│   ├── backend/             # Django project folder

│   │   ├── settings.py

│   │   ├── urls.py

│   │   └── ...

│   ├── core/                # Django app

│   │   ├── models.py        # Smartphone model

│   │   ├── views.py         # API endpoints

│   │   ├── urls.py

│   │   ├── regex\_parser.py  # Regex query handler

│   │   └── ...

│   ├── db.sqlite3           # SQLite database

│   ├── .env                 # Backend secrets (if needed)

│   └── ...

│

└── README.md

Installation

1. Clone the Repository

bash

git clone https://github.com/CodeFusionEhsan/Chatbot.git

cd Chatbot

1. Setup Clerk Authentication

Sign up at Clerk and create a new application.

Get your Publishable Key and Secret Key from the Clerk dashboard.

Add to frontend/.env.local:

text

NEXT\_PUBLIC\_CLERK\_PUBLISHABLE\_KEY=your\_publishable\_key

CLERK\_SECRET\_KEY=your\_secret\_key

1. Install Frontend Dependencies

bash

cd frontend

npm install

1. Install Backend Dependencies

bash

cd ../backend

python -m venv venv

source venv/bin/activate  # On Windows: venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py loaddata smartphones.json  # If using a fixture for smartphones data

Usage

Run the Django Backend

bash

cd backend

python manage.py runserver

Run the Next.js Frontend

bash

cd frontend

npm run dev

Interact with the chatbot

Visit the frontend in your browser.

Sign in/up with Clerk authentication.

Ask questions about smartphones, browse products, or view individual product details.

Note: The "Order" button is for demo only and does not place real orders.

How It Works

Frontend: Built with Next.js (App Router), styled using Tailwind CSS, animated with Framer Motion, and uses Lucide React for icons. Clerk handles all authentication and authorization flows.

Backend: Django serves a REST API, manages smartphone data in SQLite, and processes chatbot queries.

Communication: The frontend fetches product data and chatbot responses from the backend via fetch API.

Chatbot Logic: Uses regex patterns to identify user intent (e.g., product search, price queries, comparisons) and returns relevant data from the database.

Why These Technologies?

Technology	Why Used / Pros

Next.js	Fast load times, SEO, hybrid rendering, easy routing, scalable for e-commerce.

Django	Secure, scalable backend, rapid API development, built-in admin, ORM.

SQLite	Lightweight, zero-config, perfect for prototyping and small datasets.

Clerk	Seamless authentication, social login, secure sessions, easy integration with Next.js.

Tailwind CSS	Rapid, consistent, responsive UI development.

Framer Motion	Smooth, modern animations for better UX.

Lucide React	Crisp, customizable icons for a polished interface.

Chatbot Query Processing

Regex-Based:

The chatbot uses regular expressions to parse and understand user queries, such as:

"Show me [brand] phones"

"What is the price of [model]?"

"Compare [model1] and [model2]"

Why Regex?

Initially, Dialogflow API was used, but common problems included:

High latency and API costs

Limited customization for e-commerce queries

Occasional misclassification of intents

Switching to custom regex provided faster, more accurate, and fully controllable query parsing tailored for this domain.

App Router Pages

/ — Home: Welcome page with chatbot and featured products.

/products — Products Page: List all smartphones from the database.

/products/[id] — Product Details: View individual smartphone details.

/sign-in and /sign-up — Auth Pages: Clerk-powered authentication.

Notes

Order Button: Non-functional in demo mode.

CORS: Ensure CORS is enabled in Django to allow frontend-backend communication.

Environment Variables: Never commit secrets. Always use .env files for sensitive keys.

Contributing

Fork the repository

Create a new branch (git checkout -b feature)

Make your changes

Commit your changes (git commit -am 'Add new feature')

Push to the branch (git push origin feature)

Create a new Pull Request

License

This project is licensed under the MIT License - see the LICENSE file for details.

Author

Made with ❤️ by Ehsan Saleem
