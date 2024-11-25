import React from 'react';
import { Check, X, Minus, Download } from 'lucide-react';

interface FeatureMatrixData {
  [competitor: string]: {
    [feature: string]: boolean;
  };
}

interface Props {
  data?: FeatureMatrixData;
}

export default function FeatureMatrix({ data = {} }) {
  const features = [
    'Market Analysis',
    'Customer Discovery',
    'Competitive Intel',
    'Product Evolution',
    'Market Expansion'
  ];

  const competitors = [
    { name: 'Our Platform', key: 'us' },
    { name: 'Competitor A', key: 'compA' },
    { name: 'Competitor B', key: 'compB' },
    { name: 'Competitor C', key: 'compC' }
  ];

  const mockData: FeatureMatrixData = {
    us: {
      'Market Analysis': true,
      'Customer Discovery': true,
      'Competitive Intel': true,
      'Product Evolution': true,
      'Market Expansion': true
    },
    compA: {
      'Market Analysis': true,
      'Customer Discovery': true,
      'Competitive Intel': false,
      'Product Evolution': true,
      'Market Expansion': false
    },
    compB: {
      'Market Analysis': true,
      'Customer Discovery': false,
      'Competitive Intel': true,
      'Product Evolution': false,
      'Market Expansion': true
    },
    compC: {
      'Market Analysis': false,
      'Customer Discovery': true,
      'Competitive Intel': false,
      'Product Evolution': true,
      'Market Expansion': false
    }
  };

  const matrixData = data || mockData;

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Feature Comparison</h3>
        <button className="btn-primary flex items-center space-x-2">
          <Download size={16} />
          <span>Export Matrix</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Feature
              </th>
              {competitors.map((competitor) => (
                <th
                  key={competitor.key}
                  className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {competitor.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {features.map((feature) => (
              <tr key={feature}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {feature}
                </td>
                {competitors.map((competitor) => (
                  <td key={`${feature}-${competitor.key}`} className="px-6 py-4 whitespace-nowrap">
                    {matrixData[competitor.key]?.[feature] ? (
                      <Check className="text-green-500" size={20} />
                    ) : matrixData[competitor.key]?.[feature] === false ? (
                      <X className="text-red-500" size={20} />
                    ) : (
                      <Minus className="text-gray-400" size={20} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}