# Project Setup & Usage

### 1. Install Dependencies

```bash
npm install
```

---

### 2. Configure Environment Variables

Create a `.env` file in the root of the project and fill it with your data:

```env
UPSTASH_REDIS_REST_URL="******"
UPSTASH_REDIS_REST_TOKEN="******"
HOST_URL="******" # e.g. "https://crociani.co/"
PROTECTED_KEYS_SECRET="******" # See constants/protected_keys.ts – used to protect specific keys of the kv store via ?secret=<PROTECTED_KEYS_SECRET>
```

---

### 3. Run the Development Server

```bash
npm run dev
```

This command does two things:

- Starts the `timer.mjs`, which tracks your work session.
- Launches the Next.js development server.

When you stop the process, the timer will also stop and save the session to `.timer.json`.

---

### 4. Track Your Time

To see how much time you've worked (the dev server was running):

```bash
npm run measure
```

To convert time into money, provide your hourly rate:

```bash
npm run measure 20
```

💰 Example: `20` means €20/hour.  
It'll calculate your total earnings (if used in a freelancing context) — or losses (if you're coding a personal website... just kidding 😉).

---

### 5. Build for Production

```bash
npm run build
```

---

### 6. Deploy

You can start the production server with:

```bash
npm run start
```

Or using [PM2](https://pm2.keymetrics.io/):

```bash
pm2 restart ecosystem.config.js
```

**Don’t forget to double-check your environment variables in the config file.**

---

Happy coding! 🧑‍💻✨
