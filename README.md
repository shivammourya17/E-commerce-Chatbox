


# 🛒 E-Commerce Sales Chatbot

An AI-powered chatbot for handling customer queries in an e-commerce setting. This is a basic proof-of-concept chatbot that can assist users with requests like:

- “Show me mobiles”
- “I want to buy mobiles”
- “Show Samsung phones”

It uses Regex-based query parsing to understand user input and fetch relevant product data from a Django backend. Built with a modern tech stack including Next.js, Tailwind CSS, Clerk Authentication, and more, the system is designed for scalability and easy customization.

---

## 🧠 Features

- Basic query recognition using regular expressions  
- Fetches and returns product data relevant to the user's request  
- Built-in authentication system using Clerk  
- Clean and animated UI using Tailwind CSS and Framer Motion  
- Easily extendable to include more complex query handling or AI/NLP-based features  

---

## 🛠️ Tech Stack

### 🔹 Frontend

- Next.js with App Router  
- Turbopack (for blazing-fast bundling)  
- Tailwind CSS (for styling)  
- Framer Motion (for animations)  
- Lucide-react (for icons)  
- ESLint (for code quality)  
- Clerk (for authentication)  

### 🔹 Backend

- Python 3  
- Django  
- SQLite (for lightweight DB needs)  
- Regex (for pattern-based query parsing)  

---

---

## 🚀 Getting Started (Local Setup)

```bash
git clone https://github.com/shivammourya17/E-commerce-Chatbox.git
cd Chatbot

cd backend
python -m venv env
# On Linux/macOS:
source env/bin/activate
# On Windows:
env\Scripts\activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

cd ../frontend
npm install
npm run dev


---

Paste this into your `README.md` file and commit it using:

```bash
git add README.md
git commit -m "Added full project README"
git push origin main


AUTHOR:

Shivam Mourya

💼 LinkedIn: https://www.linkedin.com/in/shivam-mourya-57803824a/

🛠️ GitHub: https://github.com/shivammourya17

📧 Email: shivammourya1704@gmail.com 



