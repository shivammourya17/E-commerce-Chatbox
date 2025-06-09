E-Commerce Sales ChatbotA modern, full-stack E-Commerce Sales Chatbot built with&nbsp;Next.js&nbsp;(frontend) and&nbsp;Django&nbsp;(backend). The app features secure authentication with Clerk, a beautiful UI with Tailwind CSS, smooth animations using Framer Motion, and dynamic icons via Lucide React. The backend is powered by Django (project:&nbsp;backend, app:&nbsp;core), with an SQLite database pre-populated with smartphones data. The chatbot processes basic customer queries about products using custom regex-based intent detection and displays relevant product data.Repository:&nbsp;github.com/CodeFusionEhsan/ChatbotAuthor:&nbsp;Ehsan Saleem✨ FeaturesChatbot: Answers customer queries about smartphones, product details, and availability using regex-based query parsing.Authentication &amp; Authorization: Secure user sign-in/sign-up with Clerk.Product Browsing: Home, Products, and Individual Product pages with dynamic routing.Modern UI: Tailwind CSS for styling, Framer Motion for animations, and Lucide React for icons.Demo Mode: The "Order" button is non-functional (demo only).Separation of Concerns: Next.js frontend and Django backend run independently, communicating via fetch API.📁 File StructuretextChatbot/
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
🚀 Getting Started1. Clone the Repositorybashgit clone https://github.com/CodeFusionEhsan/Chatbot.git
cd Chatbot
2. Setup Clerk AuthenticationSign up at&nbsp;Clerk&nbsp;and create a new application.In your Clerk dashboard, obtain your&nbsp;Publishable Key&nbsp;and&nbsp;Secret Key.Add to Frontend&nbsp;.env.local:textNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
3. Install Frontend Dependenciesbashcd frontend
npm install
4. Install Backend Dependenciesbashcd ../backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata smartphones.json  # If using a fixture for smartphones data
5. Run the ApplicationsBackend (Django):bashcd backend
python manage.py runserver
Frontend (Next.js):bashcd frontend
npm run dev
Both apps run independently. The frontend communicates with the backend via fetch API.🧩 Core Technologies &amp; Why They’re UsedTechnologyWhy Used / ProsNext.jsBlazing fast load times, SEO optimization, server-side rendering, static generation, dynamic routing, built-in API routes, and scalability—perfect for e-commerce.DjangoRobust backend, rapid API development, built-in admin, ORM, security, and scalability for handling business logic and data.SQLiteLightweight, zero-config, easy local development, and ideal for small-to-medium datasets like demo smartphone data.ClerkDrop-in authentication &amp; authorization, social login support, secure session management, and easy integration into Next.js.Tailwind CSSUtility-first CSS for rapid, consistent, and responsive UI development.Framer MotionSmooth, modern animations to enhance user experience.Lucide ReactCrisp, customizable icons for a visually appealing UI.🤖 Chatbot Query ProcessingRegex-Based Query Parsing:The chatbot uses regular expressions to identify user intents such as product search, price queries, and feature comparisons. This allows for flexible handling of natural language questions without relying on third-party NLP services.Sample Regex Patterns:"Show me [brand] phones""What is the price of [model]?""Compare [model1] and [model2]"Why Regex?Initially, Dialogflow API was used for intent recognition. However, common issues included:High latency and API costsLimited customization for domain-specific queriesOccasional misclassification of product-related intentsSwitching to custom regex&nbsp;enabled faster, more accurate, and fully controllable query parsing tailored to the e-commerce domain.🗺️ App Router Pages/&nbsp;—&nbsp;Home: Welcome page with chatbot and featured products./products&nbsp;—&nbsp;Products Page: List all smartphones from the database./products/[id]&nbsp;—&nbsp;Product Details: View individual smartphone details./sign-in&nbsp;and&nbsp;/sign-up&nbsp;—&nbsp;Auth Pages: Clerk-powered authentication.⚡ Pros of Major TechnologiesNext.js: Fast load times, SEO, scalability, hybrid rendering, built-in routing, and easy API integration.Django: Secure, scalable, batteries-included, rapid API development, ORM for database abstraction.SQLite: Simple, file-based, no server setup, ideal for prototyping and small datasets.Clerk: Effortless auth, social login, secure session handling, and seamless Next.js integration.Tailwind CSS: Rapid styling, responsive design, utility-first, and highly customizable.Framer Motion: Declarative animations, easy to use, enhances user engagement.Lucide React: Open-source, customizable icons for a polished UI.📝 NotesOrder Button: Non-functional in demo mode.CORS: Ensure CORS is enabled in Django to allow frontend-backend communication.Environment Variables: Never commit secrets. Always use&nbsp;.env&nbsp;files for sensitive keys.👤 AuthorMade with ❤️ by&nbsp;Ehsan SaleemFor questions, suggestions, or contributions, please open an issue or pull request on&nbsp;GitHub.Enjoy building with this template!ShareExportRewriteGenerate it's code to write in my Md file like # for heading and allGenerate it's code to write in my Md file like # for heading and allAnswerSourcesE-Commerce Sales ChatbotA modern, full-stack E-Commerce Sales Chatbot built with&nbsp;Next.js&nbsp;(frontend) and&nbsp;Django&nbsp;(backend). The app features secure authentication with Clerk, a beautiful UI with Tailwind CSS, smooth animations using Framer Motion, and dynamic icons via Lucide React. The backend is powered by Django (project:&nbsp;backend, app:&nbsp;core), with an SQLite database pre-populated with smartphones data. The chatbot processes basic customer queries about products using custom regex-based intent detection and displays relevant product data.Repository:&nbsp;github.com/CodeFusionEhsan/ChatbotAuthor:&nbsp;Ehsan Saleem✨ FeaturesChatbot:&nbsp;Answers customer queries about smartphones, product details, and availability using regex-based query parsing.Authentication &amp; Authorization:&nbsp;Secure user sign-in/sign-up with Clerk.Product Browsing:&nbsp;Home, Products, and Individual Product pages with dynamic routing.Modern UI:&nbsp;Tailwind CSS for styling, Framer Motion for animations, and Lucide React for icons.Demo Mode:&nbsp;The "Order" button is non-functional (demo only).Separation of Concerns:&nbsp;Next.js frontend and Django backend run independently, communicating via fetch API.📁 File StructuretextChatbot/
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
🚀 Getting Started1. Clone the Repositorybashgit clone https://github.com/CodeFusionEhsan/Chatbot.git
cd Chatbot
2. Setup Clerk AuthenticationSign up at&nbsp;Clerk&nbsp;and create a new application.In your Clerk dashboard, obtain your&nbsp;Publishable Key&nbsp;and&nbsp;Secret Key.Add to Frontend&nbsp;.env.local:textNEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
3. Install Frontend Dependenciesbashcd frontend
npm install
4. Install Backend Dependenciesbashcd ../backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata smartphones.json  # If using a fixture for smartphones data
5. Run the ApplicationsBackend (Django):bashcd backend
python manage.py runserver
Frontend (Next.js):bashcd frontend
npm run dev
Both apps run independently. The frontend communicates with the backend via fetch API.🧩 Core Technologies &amp; Why They’re UsedTechnologyWhy Used / ProsNext.jsBlazing fast load times, SEO optimization, server-side rendering, static generation, dynamic routing, built-in API routes, and scalability—perfect for e-commerce.DjangoRobust backend, rapid API development, built-in admin, ORM, security, and scalability for handling business logic and data.SQLiteLightweight, zero-config, easy local development, and ideal for small-to-medium datasets like demo smartphone data.ClerkDrop-in authentication &amp; authorization, social login support, secure session management, and easy integration into Next.js.Tailwind CSSUtility-first CSS for rapid, consistent, and responsive UI development.Framer MotionSmooth, modern animations to enhance user experience.Lucide ReactCrisp, customizable icons for a visually appealing UI.🤖 Chatbot Query ProcessingRegex-Based Query Parsing:The chatbot uses regular expressions to identify user intents such as product search, price queries, and feature comparisons. This allows for flexible handling of natural language questions without relying on third-party NLP services.Sample Regex Patterns:"Show me [brand] phones""What is the price of [model]?""Compare [model1] and [model2]"Why Regex?Initially, Dialogflow API was used for intent recognition. However, common issues included:High latency and API costsLimited customization for domain-specific queriesOccasional misclassification of product-related intentsSwitching to custom regex&nbsp;enabled faster, more accurate, and fully controllable query parsing tailored to the e-commerce domain.🗺️ App Router Pages/&nbsp;—&nbsp;Home:&nbsp;Welcome page with chatbot and featured products./products&nbsp;—&nbsp;Products Page:&nbsp;List all smartphones from the database./products/[id]&nbsp;—&nbsp;Product Details:&nbsp;View individual smartphone details./sign-in&nbsp;and&nbsp;/sign-up&nbsp;—&nbsp;Auth Pages:&nbsp;Clerk-powered authentication.⚡ Pros of Major TechnologiesNext.js:&nbsp;Fast load times, SEO, scalability, hybrid rendering, built-in routing, and easy API integration.Django:&nbsp;Secure, scalable, batteries-included, rapid API development, ORM for database abstraction.SQLite:&nbsp;Simple, file-based, no server setup, ideal for prototyping and small datasets.Clerk:&nbsp;Effortless auth, social login, secure session handling, and seamless Next.js integration.Tailwind CSS:&nbsp;Rapid styling, responsive design, utility-first, and highly customizable.Framer Motion:&nbsp;Declarative animations, easy to use, enhances user engagement.Lucide React:&nbsp;Open-source, customizable icons for a polished UI.📝 NotesOrder Button:&nbsp;Non-functional in demo mode.CORS:&nbsp;Ensure CORS is enabled in Django to allow frontend-backend communication.Environment Variables:&nbsp;Never commit secrets. Always use&nbsp;.env&nbsp;files for sensitive keys.👤 AuthorMade with ❤️ by&nbsp;Ehsan Saleem
