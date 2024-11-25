import React from 'react';
import { FileText, Plus, BarChart2, Send } from 'lucide-react';
import { CustomerPersona } from '../../types/customer';

interface Props {
  persona: CustomerPersona;
}

export default function SurveyManager({ persona }: Props) {
  const [activeSurvey, setActiveSurvey] = React.useState<string | null>(null);

  const surveys = [
    {
      id: '1',
      title: 'Product Satisfaction Survey',
      responses: 145,
      status: 'active'
    },
    {
      id: '2',
      title: 'Feature Priority Survey',
      responses: 89,
      status: 'draft'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-700">Active Surveys</h4>
        <button className="btn-primary flex items-center space-x-2">
          <Plus size={16} />
          <span>Create Survey</span>
        </button>
      </div>

      <div className="space-y-4">
        {surveys.map((survey) => (
          <div
            key={survey.id}
            className="p-4 border rounded-lg hover:border-navy-500 cursor-pointer"
            onClick={() => setActiveSurvey(survey.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <FileText className="text-gray-400" size={20} />
                <div>
                  <p className="font-medium text-gray-900">{survey.title}</p>
                  <p className="text-sm text-gray-500">
                    {survey.responses} responses • {survey.status}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <BarChart2 size={16} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Send size={16} className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeSurvey && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-700 mb-4">Quick Stats</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 bg-white rounded-lg">
              <p className="text-sm text-gray-500">Response Rate</p>
              <p className="text-xl font-bold text-gray-900">68%</p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p className="text-sm text-gray-500">Completion Time</p>
              <p className="text-xl font-bold text-gray-900">4.2m</p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p className="text-sm text-gray-500">NPS Score</p>
              <p className="text-xl font-bold text-gray-900">8.4</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}