# Tracker (A Web Analytics Platform)

> A self-hosted, lightweight web analytics platform that lets you track page visits across your websites with a simple embeddable script no third-party cookies, no data sharing, full control.

---

##  Overview

**Tracker** is a full-stack web analytics service built with a **Node.js/Express** backend and a **React (Vite)** frontend. It allows you to register your websites, verify domain ownership via DNS, embed a tracking script, and collect real-time page visit data all under your own infrastructure.

Think of it as your own lightweight alternative to Google Analytics.

---

## Features

- **User Authentication** Register, email verification, login with JWT access + refresh tokens
- **Site Management** Register multiple sites/domains under one account
- **Domain Verification** DNS-based verification for custom domains; trusted platform domains auto-verified
- **Embeddable Script** Get a `<script>` tag to drop into any website for instant tracking
- **Page Visit Tracking** Records page URLs, session IDs, and referrers per site
- **Token Refresh** Secure session management with short-lived access tokens and long-lived refresh tokens
- **Health Check Endpoint** Monitor server uptime and status
- **React Frontend** Landing page, signup, and login UI with toast notifications

---

## 🛠️ Tech Stack

### Backend
| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB (Mongoose) |
| Auth | JWT (`jsonwebtoken`), bcrypt |
| Email | Nodemailer (custom mailer) |
| DNS Verification | Custom DNS service |

### Frontend
| Layer | Technology |
|---|---|
| Framework | React 18 (Vite) |
| Routing | React Router DOM |
| Styling | Tailwind CSS v4 |
| Notifications | react-hot-toast |

---

## Project Structure

```
tracker/
├── backend/
│   ├── controllers/
│   │   ├── analyticsController.js   # Track visits, serve scripts
│   │   ├── authController.js        # Register, verify, login, refresh
│   │   ├── healthController.js      # Health check
│   │   └── siteController.js        # Site CRUD + verification
│   ├── routes/
│   │   ├── analyticsRoutes.js
│   │   ├── authRoutes.js
│   │   ├── healthRoutes.js
│   │   └── siteRoutes.js
│   ├── models/                      # Mongoose models (User, Site, PageVisit, Session)
│   ├── middleware/
│   │   └── isAuthenticated.js       # JWT auth middleware
│   ├── services/
│   │   └── dnsService.js            # DNS TXT record verification
│   ├── mailer/
│   │   └── verifyEmail.js           # Email verification mailer
│   ├── utils/
│   │   ├── sanitizeDomain.js
│   │   ├── domainValidator.js
│   │   ├── tokenGenerator.js
│   │   └── trustedPlatform.js
│   └── public/
│       └── analytics.js             # Embeddable tracking script
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── LandingPage.jsx
    │   │   ├── Signup.jsx
    │   │   └── Login.jsx
    │   ├── components/
    │   ├── assets/
    │   ├── utils/
    │   ├── App.jsx
    │   └── main.jsx
    └── index.html
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/Muhammad-Raheel04/tracker.git
cd tracker
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

# JWT Secrets
SECRET_KEY=your_email_verification_secret
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# Script serving
SCRIPT_BASE_URL=http://localhost:5000

# Email (Nodemailer)
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
```

Start the backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at `http://localhost:5173` by default.

---

## API Reference

### Auth Routes `/api/auth`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/verify` | Verify email with token |
| POST | `/login` | Login and receive tokens |
| POST | `/refresh` | Refresh access token |

### Site Routes `/api/sites` *(Protected)*

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new website |
| POST | `/verify/:siteId` | Trigger DNS domain verification |
| GET | `/script/:siteId` | Get the embeddable script tag |
| GET | `/all-sites` | List all sites for the logged-in user |

### Analytics Routes `/api/analytics`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/version` | Get tracker script version |
| GET | `/analytics.js` | Serve the loader script |
| GET | `/analytics.v:version.js` | Serve a versioned tracker script |
| POST | `/track` | Track a page visit |

### Health Route `/api/health`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Server health check (uptime, timestamp) |

---

## Embedding the Tracker

Once your site is registered and verified, add this to your website's `<head>`:

```html
<script
  src="https://your-tracker-domain.com/api/analytics/analytics.js"
  data-token="YOUR_SITE_TOKEN"
  defer
></script>
```

The script will automatically track page visits and send them to your backend.

---

## Domain Verification

For **custom domains**, Tracker uses DNS TXT record verification:

1. Register your site you'll receive a unique token.
2. Add a DNS TXT record to your domain:
   ```
   Type: TXT
   Name: @  (or your subdomain)
   Value: tracker-verify=YOUR_TOKEN
   ```
3. Click **Verify** in the dashboard the backend checks your DNS record.

**Platform domains** (e.g., `*.vercel.app`, `*.netlify.app`) are auto-verified instantly.

---

## Security

- Passwords hashed with **bcrypt** (10 salt rounds)
- Email verification required before login
- Short-lived **JWT access tokens** (1 hour) + **refresh tokens** (7 days)
- Domain ownership verified before any tracking is allowed
- Token-based authorization on all tracking requests

---

## License

This project is open source. Feel free to fork, modify, and deploy for your own use.

---

## Author

**Muhammad Raheel**
- GitHub: [@Muhammad-Raheel04](https://github.com/Muhammad-Raheel04)