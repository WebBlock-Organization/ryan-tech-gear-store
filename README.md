# Ryan Tech Gear — Storefront

This is a standalone, production-ready e-commerce store generated automatically by the **WebBlock** platform.

## 🚀 Tech Stack
- **Frontend & Backend**: Next.js 14 App Router + Prisma ORM (Standalone Full-Stack Architecture)
- **Styling**: Tailwind CSS & Lucide Icons
- **Database**: PostgreSQL with Multi-Tenant Row-Level Security (RLS)

## 📦 Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/WebBlock-Organization/ryan-tech-gear-store.git
   cd ryan-tech-gear-store
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Ensure your `.env` has:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/webblock_db"
   NEXT_PUBLIC_TENANT_ID="c02d0462-15fe-40c3-9755-1175f7d3f9a6"
   ```
4. Generate Prisma Client (runs automatically on install):
   ```bash
   npx prisma generate
   ```
5. Run locally:
   ```bash
   npm run dev
   ```
