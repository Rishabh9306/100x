import React from 'react';
import { Globe, MapPin, Building2, Users } from 'lucide-react';

export default function GeographicAnalysis() {
  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Geographic Analysis</h3>
        <button className="btn-primary">Analyze Region</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Globe className="text-blue-500" size={20} />
            <span className="font-medium text-blue-700">Market Size</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-blue-700">$2.4B</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Users className="text-purple-500" size={20} />
            <span className="font-medium text-purple-700">Target Population</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-purple-700">12.5M</p>
        </div>
      </div>

      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Interactive Map Visualization</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Key Regions</h4>
        {['North America', 'Europe', 'Asia Pacific'].map((region) => (
          <div key={region} className="p-4 border rounded-lg">
            <div className="flex items-start space-x-3">
              <MapPin className="text-gray-400" size={20} />
              <div>
                <p className="font-medium text-gray-900">{region}</p>
                <p className="text-sm text-gray-500 mt-1">Market Readiness Score: 8.5/10</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}