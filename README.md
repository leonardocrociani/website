# Simple setup:

Install the dependencies with:
```bash
npm install
```

Create and fill a file named ".env" in the root folder of the project with your data data:
```env
UPSTASH_REDIS_REST_URL="******"
UPSTASH_REDIS_REST_TOKEN="******"
HOST_URL="******" # e.g. https://crociani.co/
```

---

Then run the website with:
```bash
npm run dev
```

---

Build the website with:
```bash
npm run build
```

Deploy the website with:
```bash
npm run start
```
or, using pm2:
```bash
pm2 restart ecosystem.config.js
```

Make sure to check the env variables within the config file.
