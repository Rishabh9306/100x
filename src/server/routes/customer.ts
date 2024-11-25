import { Router } from 'express';
import { z } from 'zod';
import { generatePersona } from '../services/persona';
import { analyzeSurveyResults } from '../services/survey';
import { processInterviewInsights } from '../services/interview';

const router = Router();

const PersonaGenerationSchema = z.object({
  industry: z.string(),
  productType: z.string(),
  pricePoint: z.string(),
  targetMarket: z.string(),
});

router.post('/persona/generate', async (req, res) => {
  try {
    const data = PersonaGenerationSchema.parse(req.body);
    const persona = await generatePersona(data);
    res.json(persona);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request data' });
  }
});

export { router as customerRouter };