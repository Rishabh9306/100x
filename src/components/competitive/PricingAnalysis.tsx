import React from 'react';
import { DollarSign, Package, Users, Zap } from 'lucide-react';

interface PricingData {
  [competitor: string]: {
    averagePrice: number;
    priceRange: {
      min: number;
      max: number;
    };
  };
}

interface Props {
  data?: PricingData;
}

export default function PricingAnalysis({ data = {} }) {
  const mockData: PricingData = {
    'Our Platform': {
      averagePrice: 99,
      priceRange: { min: 49, max: 299 }
    },
    'Competitor A': {
      averagePrice: 149,
      priceRange: { min: 79, max: 399 }
    },
    'Competitor B': {
      averagePrice: 79,
      priceRange: { min: 29, max: 199 }
    }
  };

  const pricingData = data || mockData;

  const tiers = [
    {
      name: 'Basic',
      icon: Package,
      price: 49,
      features: [
        'Market Analysis',
        'Customer Discovery',
        'Basic Reporting'
      ]
    },
    {
      name: 'Professional',
      icon: Users,
      price: 99,
      features: [
        'All Basic features',
        'Competitive Intel',
        'Product Evolution',
        'Advanced Analytics'
      ]
    },
    {
      name: 'Enterprise',
      icon: Zap,
      price: 299,
      features: [
        'All Professional features',
        'Market Expansion',
        'Custom Integration',
        'Dedicated Support'
      ]
    }
  ];

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Pricing Analysis</h3>
        <button className="btn-primary">Update Pricing</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div key={tier.name} className="p-6 border rounded-lg">
            <div className="flex items-center space-x-2">
              <tier.icon className="text-navy-500" size={24} />
              <h4 className="text-lg font-semibold text-gray-900">{tier.name}</h4>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold text-gray-900">${tier.price}</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-gray-600">
                  <DollarSign className="text-green-500 mr-2" size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="font-medium text-gray-700 mb-4">Competitor Price Comparison</h4>
        <div className="space-y-4">
          {Object.entries(pricingData).map(([competitor, pricing]) => (
            <div key={competitor} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{competitor}</p>
                  <p className="text-sm text-gray-500">
                    Range: ${pricing.priceRange.min} - ${pricing.priceRange.max}
                  </p>
                </div>
                <span className="text-lg font-bold text-navy-600">
                  ${pricing.averagePrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}