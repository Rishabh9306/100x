import React from 'react';
import { Calendar, Flag, Target, ArrowRight } from 'lucide-react';

export default function RoadmapPlanner() {
  const quarters = [
    {
      id: 'q1-2024',
      name: 'Q1 2024',
      theme: 'Market Expansion',
      features: [
        { id: '1', title: 'International Payment Gateway', status: 'in_progress' },
        { id: '2', title: 'Multi-language Support', status: 'planned' }
      ]
    },
    {
      id: 'q2-2024',
      name: 'Q2 2024',
      theme: 'User Experience',
      features: [
        { id: '3', title: 'Advanced Analytics Dashboard', status: 'planned' },
        { id: '4', title: 'Custom Report Builder', status: 'planned' }
      ]
    }
  ];

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Product Roadmap</h3>
        <div className="flex space-x-2">
          <button className="btn-primary">Share Roadmap</button>
          <button className="btn-primary">Export PDF</button>
        </div>
      </div>

      <div className="space-y-6">
        {quarters.map((quarter) => (
          <div key={quarter.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Calendar className="text-navy-500" size={20} />
                <h4 className="font-medium text-gray-900">{quarter.name}</h4>
              </div>
              <div className="flex items-center space-x-2">
                <Flag size={16} className="text-gray-400" />
                <span className="text-sm text-gray-500">{quarter.theme}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {quarter.features.map((feature) => (
                <div key={feature.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Target size={16} className="text-gray-400" />
                      <span className="font-medium text-gray-900">{feature.title}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      feature.status === 'in_progress' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {feature.status === 'in_progress' ? 'In Progress' : 'Planned'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
        <button className="flex items-center space-x-2 text-navy-600 hover:text-navy-700">
          <span>View Full Roadmap</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}