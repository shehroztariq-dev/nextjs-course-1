# Truly

**Truly** is a modern feedback collection platform built with **Next.js**. It allows you to gather real, actionable feedback from users in a simple and elegant way.

## 🚀 Tech Stack

| Technology      | Usage                                  |
| --------------- | -------------------------------------- |
| **Next.js**     | Frontend & API Routes                  |
| **MongoDB**     | Database for storing feedback          |
| **NextAuth.js** | Authentication (e.g., Google, GitHub)  |
| **Zod**         | Input validation and schema definition |
| **Resend API**  | Sending transactional emails           |
| **shadcn/ui**   | Beautiful UI components                |

---

## ✨ Features

- Collect user feedback easily
- Email notifications using **Resend API**
- Authentication via **NextAuth.js**
- Form validation with **Zod**
- Responsive & accessible UI with **shadcn/ui**
- Secure data storage in **MongoDB**

---

## 📂 Project Structure

```
/app           - Next.js App Router
/components    - Reusable UI components (shadcn/ui based)
/lib           - Helpers & utilities (MongoDB, Resend, etc.)
/schemas       - Zod schemas for validation
/api           - Feedback APIs & auth routes
```

---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/truly.git
cd truly
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Environment Variables

Create a `.env.local` file:

```
NEXTAUTH_URL=your-site-url
NEXTAUTH_SECRET=your-next-auth-secret

MONGODB_URI=your-mongodb-connection-string

RESEND_API_KEY=your-resend-api-key
RESEND_FROM=your-email@example.com
```

---

## 🧪 Run Locally

```bash
npm run dev
# or
yarn dev
```

---

## 🔐 Authentication

- **NextAuth.js** for secure user login
- Supports OAuth (Google, GitHub, etc.)

---

## 📧 Email Integration

- Uses **Resend API** to send confirmation or feedback notification emails

---

## 📝 Validation

- **Zod** ensures data integrity on both client and server

---

## 📦 Deployment

Deployed on **Vercel** for the best Next.js support.

---

## 📄 License

MIT License.

---

## 🌐 Live Demo

[https://truly-feedback.vercel.app](https://truly-feedback.vercel.app)

---
