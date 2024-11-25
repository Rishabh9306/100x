import { Router } from 'express';
import { z } from 'zod';
import { calculateMarketSize } from '../services/marketSize';
import { analyzeMarketTrends } from '../services/marketTrends';
import { getEconomicIndicators } from '../services/economic';

const router = Router();

const MarketAnalysisSchema = z.object({
  industry: z.string(),
  region: z.string(),
  timeframe: z.number(),
});

router.post('/analysis', async (req, res) => {
  try {
    const data = MarketAnalysisSchema.parse(req.body);
    
    const [marketSize, trends, economic] = await Promise.all([
      calculateMarketSize(data),
      analyzeMarketTrends(data),
      getEconomicIndicators(data.region)
    ]);

    res.json({
      marketSize,
      trends,
      economic
    });
  } catch (error) {
    res.status(400).json({ error: 'Invalid request data' });
  }
});

export { router as marketRouter };