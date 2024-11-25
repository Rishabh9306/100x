import React from 'react';
import { Globe, Users, Heart, Lightbulb } from 'lucide-react';

export default function CulturalFit() {
  const culturalFactors = [
    {
      id: '1',
      category: 'Business Practices',
      compatibility: 0.85,
      insights: [
        'Formal business relationships valued',
        'Long-term partnerships preferred',
        'Hierarchical decision-making common'
      ]
    },
    {
      id: '2',
      category: 'Consumer Behavior',
      compatibility: 0.75,
      insights: [
        'Quality-conscious market',
        'Brand loyalty important',
        'Digital payment adoption high'
      ]
    },
    {
      id: '3',
      category: 'Communication Style',
      compatibility: 0.90,
      insights: [
        'Direct communication preferred',
        'English widely used in business',
        'Digital communication accepted'
      ]
    }
  ];

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Cultural Fit Analysis</h3>
        <button className="btn-primary">Update Analysis</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {culturalFactors.map((factor) => (
          <div key={factor.id} className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">{factor.category}</h4>
              <span className="text-lg font-bold text-navy-600">
                {(factor.compatibility * 100).toFixed(0)}%
              </span>
            </div>
            <div className="space-y-2">
              {factor.insights.map((insight, index) => (
                <p key={index} className="text-sm text-gray-600">• {insight}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="text-navy-500" size={20} />
            <span className="font-medium text-gray-700">Recommendations</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Adapt communication style to local preferences</li>
            <li>• Consider local partnership opportunities</li>
            <li>• Invest in local market research</li>
          </ul>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="text-navy-500" size={20} />
            <span className="font-medium text-gray-700">Success Factors</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Strong digital presence</li>
            <li>• Quality-focused approach</li>
            <li>• Adaptable business model</li>
          </ul>
        </div>
      </div>
    </div>
  );
}