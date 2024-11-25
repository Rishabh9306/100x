import React from 'react';
import { BarChart, DollarSign, Users, Target } from 'lucide-react';
import { MarketSize } from '../../types/market';

interface Props {
  marketSize: MarketSize;
}

export default function MarketSizeCalculator({ marketSize }: Props) {
  const formatValue = (value: number) => {
    if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(1)}B`;
    }
    if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(1)}M`;
    }
    return `$${value.toLocaleString()}`;
  };

  const metrics = [
    {
      label: 'Total Addressable Market (TAM)',
      value: formatValue(marketSize.tam),
      icon: BarChart,
      description: 'Total market demand for your product/service',
      color: 'text-blue-500',
    },
    {
      label: 'Serviceable Addressable Market (SAM)',
      value: formatValue(marketSize.sam),
      icon: Users,
      description: 'Market you can reach with your business model',
      color: 'text-green-500',
    },
    {
      label: 'Serviceable Obtainable Market (SOM)',
      value: formatValue(marketSize.som),
      icon: Target,
      description: 'Market you can capture in the near term',
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Market Size Analysis</h3>
        <button className="btn-primary flex items-center space-x-2">
          <DollarSign size={16} />
          <span>Calculate Market Size</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="card">
            <div className="flex items-start justify-between">
              <div>
                <metric.icon className={`${metric.color}`} size={24} />
                <h4 className="mt-2 font-semibold text-gray-900">{metric.label}</h4>
                <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}