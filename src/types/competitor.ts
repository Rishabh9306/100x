export interface Competitor {
  id: string;
  name: string;
  website: string;
  businessModel: string;
  revenueModel: string;
  marketShare: number;
  growthRate: number;
  fundingStatus: string;
  employeeCount: number;
  founded: number;
  products: Product[];
  strengths: string[];
  weaknesses: string[];
}

export interface Product {
  id: string;
  name: string;
  features: string[];
  pricing: {
    model: string;
    startingPrice: number;
    tiers: PricingTier[];
  };
  targetMarket: string[];
  launchDate: string;
}

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  billingPeriod: 'monthly' | 'annual';
}

export interface CompetitiveAnalysis {
  competitors: Competitor[];
  marketShare: {
    [key: string]: number;
  };
  featureComparison: {
    [key: string]: {
      [feature: string]: boolean;
    };
  };
  pricingAnalysis: {
    [key: string]: {
      averagePrice: number;
      priceRange: {
        min: number;
        max: number;
      };
    };
  };
}