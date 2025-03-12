🐝 The Smoking Bee - Headless Shopify Store
🚀 Next.js 15 + Shopify Storefront API + Tailwind CSS

📌 About the Project
The Smoking Bee is a fully headless Shopify eCommerce store built using Next.js.
It integrates Shopify Storefront API to fetch products, handle checkout, and provide a modern, fast, and SEO-optimized shopping experience.

🚀 Tech Stack
Frontend: Next.js 15
Styling: Tailwind CSS
Backend: Shopify Storefront API
Cart Management: Shopify Cart API + Context API
Hosting & Deployment: Vercel
Email Handling: Nodemailer + API Routes
🎯 Features
✅ Headless Shopify Integration – Fetches collections, products & cart from Shopify.
✅ Optimized for SEO – Dynamic meta tags, OpenGraph, structured data.
✅ Mobile-Friendly Design – Responsive, modern UI built with Tailwind CSS.
✅ Shop Toggle Functionality – Easily turn the shop on/off via Admin settings.
✅ Cart & Checkout – Shopify-powered cart system with smooth checkout.
✅ Webhooks Support – Auto-refresh inventory & collections.
✅ Fast Deployment – Hosted on Vercel for blazing-fast performance.

🔧 Getting Started
1️⃣ Clone the Repo
 
 
 
git clone https://github.com/AnthonyBarbaro/SmokingBee.git
cd SmokingBee
2️⃣ Install Dependencies
 
 
 
npm install
or
yarn install

3️⃣ Set Up Environment Variables
Create a .env.local file and add your Shopify credentials:

 
 
 
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-shop.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-access-token
NEXT_PUBLIC_SHOPIFY_REVALIDATION_SECRET=your-secret-key
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
4️⃣ Run the Development Server
 
 
 
npm run dev
Visit http://localhost:3000 to view the site.

🎨 Project Structure
ruby
 
 
📦 src
 ┣ 📂app                   # Next.js App Router
 ┃ ┣ 📂shop               # Shop-related pages
 ┃ ┣ 📂product            # Product pages
 ┃ ┣ 📂contact            # Contact form & page
 ┣ 📂components           # UI components (Navbar, Footer, etc.)
 ┣ 📂context              # Cart & Shop context
 ┣ 📂lib                  # Shopify API functions
 ┣ 📂public               # Static assets
 ┣ 📂styles               # Global styles
 ┗ 📜 next.config.js      # Next.js configuration
🛠 API Endpoints
Shopify Storefront API: Fetches products & collections.
Cart API: Handles Shopify cart functions.
Contact Form API: Sends emails via Nodemailer.
Revalidation API: Refreshes products on Shopify updates.
📦 Deployment
This project is hosted on Vercel for fast performance.

Deploy it Yourself
Push to GitHub
 
 
 
git add .
git commit -m "Initial commit"
git push origin main
Import to Vercel
Go to Vercel
Click Import Project
Select SmokingBee Repo
Set up environment variables
Deploy!
🤝 Contributing
Fork the repo
Create a branch (git checkout -b feature-branch)
Make changes & commit (git commit -m "Added new feature")
Push to GitHub (git push origin feature-branch)
Open a Pull Request
📜 License
MIT License - Open for use and modifications.

📩 Contact
📧 Email: info@thesmokingbee.com
🌐 Website: The Smoking Bee

