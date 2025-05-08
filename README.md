This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash

pnpm install       # Install dependencies
pnpm run dev       # Start the development server
pnpm run db        # Run database-related scripts

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```env
NEXTAUTH_SECRET=your-secret
DATABASE_URL=postgres://postgres:mahdi2019@127.0.0.1:5432/starterpedia
DIRECT_URL=postgres://postgres:mahdi2019@127.0.0.1:5432/starterpedia
```

- **NEXTAUTH_SECRET**: A secret key used by NextAuth.js for encrypting sessions. Replace `your-secret` with a secure, randomly generated string.
- **DATABASE_URL**: The connection string for your PostgreSQL database.
- **DIRECT_URL**: Direct connection string for your PostgreSQL database (used for specific database operations).

---

This section is concise and provides clear instructions for setting up the `.env` file. Let me know if you need further adjustments!
