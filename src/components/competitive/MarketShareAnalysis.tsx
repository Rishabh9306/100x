import React from 'react';
import { PieChart, TrendingUp, Users, ArrowRight } from 'lucide-react';

interface MarketShareData {
  [competitor: string]: number;
}

interface Props {
  data?: MarketShareData;
}

export default function MarketShareAnalysis({ data = {} }) {
  const mockData: MarketShareData = {
    'Our Platform': 25,
    'Competitor A': 30,
    'Competitor B': 20,
    'Competitor C': 15,
    'Others': 10
  };

  const marketShare = data || mockData;

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Market Share Analysis</h3>
        <button className="btn-primary">Update Data</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <PieChart className="text-blue-500" size={20} />
            <span className="font-medium text-blue-700">Market Share</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-blue-700">25%</p>
          <p className="text-sm text-blue-600">+5.2% from last quarter</p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <TrendingUp className="text-green-500" size={20} />
            <span className="font-medium text-green-700">Growth Rate</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-green-700">18.4%</p>
          <p className="text-sm text-green-600">Year over year</p>
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(marketShare).map(([competitor, share]) => (
          <div key={competitor} className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{competitor}</p>
                <div className="mt-2 h-2 w-full bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-navy-500 rounded-full"
                    style={{ width: `${share}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-lg font-bold text-navy-600">{share}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}