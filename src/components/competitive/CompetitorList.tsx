// import React from 'react';
import { Building2, TrendingUp, Users, Calendar } from 'lucide-react';
import { Competitor } from '../../types/competitor';

interface Props {
  competitors: Competitor[];
}

export default function CompetitorList({ competitors }: Props) {
  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Competitors</h3>
        <button className="btn-primary">Add Competitor</button>
      </div>

      <div className="space-y-4">
        {competitors.map((competitor) => (
          <div key={competitor.id} className="p-4 border rounded-lg hover:border-navy-500">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">{competitor.name}</h4>
                <p className="text-sm text-gray-500">{competitor.businessModel}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                competitor.growthRate > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {competitor.growthRate > 0 ? '+' : ''}{competitor.growthRate}% YoY
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Building2 size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{competitor.fundingStatus}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{competitor.employeeCount} employees</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{competitor.marketShare}% market share</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">Founded {competitor.founded}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}