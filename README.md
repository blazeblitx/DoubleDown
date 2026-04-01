# 📚 DoubleDown

DoubleDown is an open-source elite execution engine built to empower **ambitious developers** with high-fidelity resources, roadmaps, and peak performance tools. Whether you're starting out or doubling down on your career, this platform provides the strategy to bridge the gap between good and elite.



---

## 🌟 Features

* 📖 Curated learning resources for **Web Development**, **DSA**, **AI/ML**, and more
* 🛠️ Interactive tools for productivity and coding practice
* 🎯 Step-by-step roadmaps for developers at all stages
* 🌍 Open-source friendly with **Hacktoberfest participation**
* 🤝 Community-driven contributions

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React.js, TypeScript, Tailwind CSS  
- **Backend**: Next.js (API Routes), Node.js  
- **ORM**: Prisma  
- **Auth**: Clerk  
- **Database**: Supabase  
- **Deployment**: Vercel  

---

## 🚀 Getting Started (Developer Mode)

Follow these steps to set up DoubleDown locally:

### 1. Fork & Clone Repo

```bash
git clone https://github.com/blazeblitx
/DoubleDown.git
cd DoubleDown

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase (Database)

1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Copy the connection string and add it to your `.env.local` file:

```bash
DATABASE_URL=your_supabase_connection_string
```

### 4. Run Database Migrations

```bash
npx prisma generate
npx prisma db push
npx prisma studio   # optional, DB UI
```

### 5. Get API Keys & Configure Environment

**Clerk (Authentication):**

* Go to [Clerk Dashboard](https://dashboard.clerk.com)
* Create a new application
* Add the following to `.env.local`:

```bash
CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
```

### 6. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`

---

