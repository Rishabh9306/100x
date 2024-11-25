import React from 'react';
import { TrendingUp, Users, Target, ArrowUp, ArrowDown } from 'lucide-react';

const metrics = [
  {
    label: 'Market Growth',
    value: '+24.8%',
    trend: 'up',
    description: 'Year-over-year market expansion'
  },
  {
    label: 'Competition Index',
    value: '72/100',
    trend: 'down',
    description: 'Market saturation score'
  },
  {
    label: 'Opportunity Score',
    value: '8.4/10',
    trend: 'up',
    description: 'Market entry favorability'
  }
];

export default function MarketAnalysis() {
  return (
    <section id="market-analysis" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Market Analysis</h2>
        <button className="px-4 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{metric.label}</span>
              {metric.trend === 'up' ? (
                <ArrowUp className="text-green-500" size={20} />
              ) : (
                <ArrowDown className="text-red-500" size={20} />
              )}
            </div>
            <div className="mt-2">
              <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
              <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          {/* Placeholder for actual chart */}
          <p className="text-gray-400">Market Trend Visualization</p>
        </div>
      </div>
    </section>
  );
}