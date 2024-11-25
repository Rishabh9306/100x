import React from 'react';
import { Shield, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function RegulatoryCompliance() {
  const requirements = [
    {
      id: '1',
      title: 'Data Protection',
      status: 'compliant',
      description: 'GDPR and local data protection laws'
    },
    {
      id: '2',
      title: 'Business Registration',
      status: 'pending',
      description: 'Local business entity registration'
    },
    {
      id: '3',
      title: 'Tax Compliance',
      status: 'non_compliant',
      description: 'VAT and corporate tax requirements'
    }
  ];

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Regulatory Compliance</h3>
        <button className="btn-primary">Check Requirements</button>
      </div>

      <div className="space-y-4">
        {requirements.map((req) => (
          <div key={req.id} className="p-4 border rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {req.status === 'compliant' && (
                  <CheckCircle className="text-green-500" size={20} />
                )}
                {req.status === 'pending' && (
                  <AlertCircle className="text-yellow-500" size={20} />
                )}
                {req.status === 'non_compliant' && (
                  <XCircle className="text-red-500" size={20} />
                )}
                <div>
                  <p className="font-medium text-gray-900">{req.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{req.description}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                req.status === 'compliant' 
                  ? 'bg-green-100 text-green-800'
                  : req.status === 'pending'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {req.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="text-navy-500" size={20} />
          <span className="font-medium text-gray-700">Compliance Score</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="h-2 w-64 bg-gray-200 rounded-full">
              <div className="h-2 w-2/3 bg-navy-500 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-500">8 out of 12 requirements met</p>
          </div>
          <span className="text-2xl font-bold text-navy-600">67%</span>
        </div>
      </div>
    </div>
  );
}