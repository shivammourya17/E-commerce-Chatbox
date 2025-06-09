E-Commerce Sales Chatbot
A modern, full-stack E-Commerce Sales Chatbot built with Next.js (frontend) and Django (backend). The app features secure authentication with Clerk, a beautiful UI with Tailwind CSS, smooth animations using Framer Motion, and dynamic icons via Lucide React. The backend is powered by Django (project: backend, app: core), with an SQLite database pre-populated with smartphones data. The chatbot processes basic customer queries about products using custom regex-based intent detection and displays relevant product data.

Repository: github.com/CodeFusionEhsan/Chatbot
Author: Ehsan Saleem

✨ Features
Chatbot: Answers customer queries about smartphones, product details, and availability using regex-based query parsing.

Authentication & Authorization: Secure user sign-in/sign-up with Clerk.

Product Browsing: Home, Products, and Individual Product pages with dynamic routing.

Modern UI: Tailwind CSS for styling, Framer Motion for animations, and Lucide React for icons.

Demo Mode: The "Order" button is non-functional (demo only).

Separation of Concerns: Next.js frontend and Django backend run independently, communicating via fetch API.

📁 File Structure
Root
text
Chatbot/
│
├── frontend/                # Next.js (App Router)
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx         # Home page
│   │   ├── products/
│   │   │   ├── page.tsx     # Products listing
│   │   │   └── [id]/
│   │   │       └── page.tsx # Individual product page
│   │   ├── components/
│   │   │   ├── Chatbot.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── ...          
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── public/
│   ├── styles/
│   ├── .env.local           # Clerk keys here
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
│   │   ├── regex_parser.py  # Regex query handler
│   │   └── ...
│   ├── db.sqlite3           # SQLite database
│   ├── .env                 # Backend secrets (if needed)
│   └── ...
│
└── README.md
🚀 Getting Started
1. Clone the Repository
bash
git clone https://github.com/CodeFusionEhsan/Chatbot.git
cd Chatbot
2. Setup Clerk Authentication
Sign up at Clerk and create a new application.

In your Clerk dashboard, obtain your Publishable Key and Secret Key.

Add to Frontend .env.local:
text
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
3. Install Frontend Dependencies
bash
cd frontend
npm install
4. Install Backend Dependencies
bash
cd ../backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata smartphones.json  # If using a fixture for smartphones data
5. Run the Applications
Backend (Django):

bash
cd backend
python manage.py runserver
Frontend (Next.js):

bash
cd frontend
npm run dev
Both apps run independently. The frontend communicates with the backend via fetch API.

🧩 Core Technologies & Why They’re Used
Technology	Why Used / Pros
Next.js	Blazing fast load times, SEO optimization, server-side rendering, static generation, dynamic routing, built-in API routes, and scalability—perfect for e-commerce.
Django	Robust backend, rapid API development, built-in admin, ORM, security, and scalability for handling business logic and data.
SQLite	Lightweight, zero-config, easy local development, and ideal for small-to-medium datasets like demo smartphone data.
Clerk	Drop-in authentication & authorization, social login support, secure session management, and easy integration into Next.js.
Tailwind CSS	Utility-first CSS for rapid, consistent, and responsive UI development.
Framer Motion	Smooth, modern animations to enhance user experience.
Lucide React	Crisp, customizable icons for a visually appealing UI.
🤖 Chatbot Query Processing
Regex-Based Query Parsing:
The chatbot uses regular expressions to identify user intents such as product search, price queries, and feature comparisons. This allows for flexible handling of natural language questions without relying on third-party NLP services.

Sample Regex Patterns:

"Show me [brand] phones"

"What is the price of [model]?"

"Compare [model1] and [model2]"

Why Regex?
Initially, Dialogflow API was used for intent recognition. However, common issues included:

High latency and API costs

Limited customization for domain-specific queries

Occasional misclassification of product-related intents

Switching to custom regex enabled faster, more accurate, and fully controllable query parsing tailored to the e-commerce domain.

🗺️ App Router Pages
/ — Home: Welcome page with chatbot and featured products.

/products — Products Page: List all smartphones from the database.

/products/[id] — Product Details: View individual smartphone details.

/sign-in and /sign-up — Auth Pages: Clerk-powered authentication.

⚡ Pros of Major Technologies
Next.js: Fast load times, SEO, scalability, hybrid rendering, built-in routing, and easy API integration.

Django: Secure, scalable, batteries-included, rapid API development, ORM for database abstraction.

SQLite: Simple, file-based, no server setup, ideal for prototyping and small datasets.

Clerk: Effortless auth, social login, secure session handling, and seamless Next.js integration.

Tailwind CSS: Rapid styling, responsive design, utility-first, and highly customizable.

Framer Motion: Declarative animations, easy to use, enhances user engagement.

Lucide React: Open-source, customizable icons for a polished UI.

📝 Notes
Order Button: Non-functional in demo mode.

CORS: Ensure CORS is enabled in Django to allow frontend-backend communication.

Environment Variables: Never commit secrets. Always use .env files for sensitive keys.

👤 Author
Made with ❤️ by Ehsan Saleem
