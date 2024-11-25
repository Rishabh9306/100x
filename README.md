# StrategyAI Platform

An AI-powered startup strategy platform that helps founders navigate market entry and achieve product-market fit.

## Configuration

Create a `.env` file in the root directory with the following API keys:

```env
# Market Intelligence
YAHOO_FINANCE_API_KEY=your_api_key
YAHOO_FINANCE_API_HOST=yh-finance.p.rapidapi.com

# Economic Data
WORLD_BANK_API_KEY=your_api_key

# Industry Data
STATISTA_API_KEY=your_api_key
STATISTA_ACCESS_TOKEN=your_access_token

# Geographic Data
OPENSTREETMAP_API_KEY=your_api_key

# Optional: Set environment
NODE_ENV=development
PORT=3001
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Start the backend server:
```bash
npm run server
```

## Available Scripts

- `npm run dev`: Start the frontend development server
- `npm run server`: Start the backend server
- `npm run build`: Build the production application
- `npm run lint`: Run ESLint
- `npm run preview`: Preview the production build locally