export interface MarketSize {
  tam: number;
  sam: number;
  som: number;
}

export interface MarketTrend {
  growthRate: number;
  maturityLevel: 'emerging' | 'growth' | 'mature' | 'declining';
  technologyAdoption: number;
  regulatoryRisk: 'low' | 'medium' | 'high';
}

export interface MarketSegment {
  id: string;
  name: string;
  size: number;
  growthRate: number;
  demographics: {
    ageRange: string;
    income: string;
    location: string;
  };
  psychographics: {
    interests: string[];
    values: string[];
    lifestyle: string[];
  };
}

export interface EconomicIndicator {
  gdpImpact: number;
  inflationRate: number;
  currencyStability: number;
  marketStability: 'low' | 'medium' | 'high';
}