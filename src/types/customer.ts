export interface CustomerPersona {
  id: string;
  name: string;
  demographics: {
    ageRange: string;
    gender: string;
    income: string;
    education: string;
    location: string;
    occupation: string;
  };
  psychographics: {
    goals: string[];
    challenges: string[];
    values: string[];
    interests: string[];
    behaviors: string[];
  };
  buyingBehavior: {
    purchaseFrequency: string;
    averageOrderValue: number;
    preferredChannels: string[];
    decisionFactors: string[];
  };
  painPoints: string[];
}

export interface CustomerSurvey {
  id: string;
  title: string;
  description: string;
  questions: Array<{
    id: string;
    type: 'multiple_choice' | 'rating' | 'open_ended';
    question: string;
    options?: string[];
  }>;
  responses: Array<{
    id: string;
    questionId: string;
    answer: string | number;
  }>;
}

export interface CustomerInterview {
  id: string;
  customerName: string;
  date: string;
  duration: number;
  topics: string[];
  keyInsights: string[];
  painPoints: string[];
  suggestions: string[];
  nextSteps: string[];
}