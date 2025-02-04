This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc



Install Packages 

- Shadcn UI - is built on top of tailwind-css 
        - npx shadcn@latest component-name --legacy-peer-deps
        used components from shadcn ui -
                - Badge
                - Button
                - Calender
                - Card
                - Checkbox
                - Drawer
                - Dropdown-menu
                - Input
                - Popover
                - Progress
                - Select
                - Switch
                - Table
                - Tooltip
                - sonner
First, run the development server:


import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";



clerk - User Authentication - most comprehensive User managament Platform 

** Backend **

Database - supabase - postgresSQL DB - Prisma ORM - [Supabase](https://supabase.com/)

npm i -D prisma --legacy-peer-deps
        - (-D) means, Installted as Developement Package wont't be used for Production. 
        - npx prisma init

                ORM stands for object-relational mapping, a programming technique that connects object-oriented programming languages with relational databases. ORMs allow developers to work with data using the programming language's objects, instead of writing SQL queries. 
                How ORMs work
                Create a layer
                ORMs use metadata descriptors to create a layer between the programming language and the database. 
                Translate data
                ORMs translate data between the database and the programming language. 
                Generate SQL code
                ORMs generate SQL code to insert, update, create, and delete data in the database. 
                Manage data
                ORMs manage the application's data needs, so developers don't need to write low-level code. 
                Benefits of ORMs
                Increased productivity: ORMs remove the need for boilerplate code and awkward techniques, which can increase developer productivity. 
                Standardized interfaces: ORMs standardize interfaces, which can speed up development time. 
                Consistent view of objects: ORMs allow programmers to maintain a consistent view of objects over time. 

Security - Arcjet - Bot detection - [Secure your application](https://arcjet.com/)


InnGest - [Inngest]-(https://www.inngest.com/)for handling queing, recurring transactions, montly financial reports , Budget alerts to user & cron Jobs - 


Schema Image - public/AI-finance-app_DB_schema.png

                1. users table( clerkUserId, name, email, ImageURL, createdAt, updatedAt, id) with 1:1 realation with budget table and 1:many with accounts, trasactions tables
                2. accounts table(id, name, type, balance, isDefault, userId(foreign key for users table), createdAt, updatedAt) with 1: many relation with          transactions.
                3. transactions table( id, type(income/ expense),  userId, amount, amountId(foreign key for account table), description, date, category, receiptUrl,            isRecurring(salaries, subscriptions can be either debit/ credit ), recurringInterval(daily, montly, custom intervals), nextRecurringDate, lastProcessed, status, createdAt, updatedAt) 
                4. budgets table ( id, amount, userId, lastAlertSent(inngest function to send email alerts- last alert sent ), createdAt, updatedAt)


Used Prisma Queries (built on top of SQL Queries)





Routing in nextjs
        - A route group can be created by wrapping a folder's name in parenthesis: (folderName)- auth, main, 
        [folder]	Dynamic route segment - [id]
        [...folder]	Catch-all route segment - 
        [[...folder]]	Optional catch-all route segment -[[...sign-in]]




Server actions - API calls - actions folder




React - hook- forms  - ZOD -
        - npm i react-hook-form zod @hookform/resolvers --legacy-peer-deps
        - zod - TypeScript form  validation library
        Schema Validation Library:
        Zod is a TypeScript-first library for defining and validating data structures (schemas). It helps you ensure that the data you're working with conforms to the expected format. 


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



 // ^0.468.0 - lucide-react
//  next - 15.1.0
// react - ^19.0.0
// tailwind-merge 2.5.5
