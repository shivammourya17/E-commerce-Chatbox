# 🛒 E-Commerce Sales Chatbot

An AI-powered chatbot for handling customer queries in an e-commerce setting. This is a basic proof-of-concept chatbot that can assist users with requests like:

- “Show me mobiles”
- “I want to buy mobiles”
- “Show Samsung phones”

It uses **Regex-based query parsing** to understand user input and fetch relevant product data from a Django backend. Built with a modern tech stack including **Next.js**, **Tailwind CSS**, **Clerk Authentication**, and more, the system is designed for scalability and easy customization.

---

## 🧠 Features

- Basic query recognition using **regular expressions**
- Fetches and returns product data relevant to the user's request
- Built-in authentication system using **Clerk**
- Clean and animated UI using **Tailwind CSS** and **Framer Motion**
- Easily extendable to include more complex query handling or AI/NLP-based features

---

## 🛠️ Tech Stack

### 🔹 Frontend

- **Next.js** with **App Router**
- **Turbopack** (for blazing-fast bundling)
- **Tailwind CSS** (for styling)
- **Framer Motion** (for animations)
- **Lucide-react** (for icons)
- **ESLint** (for code quality)
- **Clerk** (for authentication)

### 🔹 Backend

- **Python 3**
- **Django**
- **SQLite** (for lightweight DB needs)
- **Regex** (for pattern-based query parsing)

---

## 📁 Project Structure

Chatbot/
│
├── backend/ # Django backend
│ └── ...
│
├── frontend/ # Next.js frontend
│ └── ...


---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.com/CodeFusionEhsan/Chatbot.git
cd Chatbot

2. Backend Setup (Django)
bash
Copy
Edit
cd backend
python -m venv env
source env/bin/activate    # On Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
⚠️ Make sure Python 3 is installed and available in your system.

3. Frontend Setup (Next.js)
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
⚠️ Ensure Node.js (18+) and npm are installed.

💬 How It Works
The chatbot interface accepts user input via a chatbox.

Queries are parsed using Regex to extract relevant product intents (e.g., looking for a specific brand or category).

Based on the matched pattern, the frontend sends a request to the Django API.

Django filters the database (SQLite) for matching products and sends back the result.

The frontend dynamically displays the product list in a clean UI.

The logic can be enhanced with:

Advanced NLP/NLU libraries (e.g., spaCy, transformers)

A vector database for semantic search

ChatGPT-like AI integrations for better flexibility

📌 Future Improvements
Add product recommendation engine

Enhance intent recognition using NLP

Real-time chat experience with WebSocket

Admin dashboard for managing products

👨‍💻 Author

Ehsan Saleem

💼 LinkedIn: https://linkedin.com/in/ehsan-saleem-web3

🛠️ GitHub: https://github.com/CodeFusionEhsan

📧 Email: web3.ehsan@gmail.com
