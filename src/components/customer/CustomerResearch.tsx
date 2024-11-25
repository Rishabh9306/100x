import React from 'react';
import { FileText, MessageSquare, PieChart } from 'lucide-react';
import { CustomerPersona } from '../../types/customer';
import SurveyManager from './SurveyManager';
import InterviewGuide from './InterviewGuide';

interface Props {
  persona: CustomerPersona;
}

export default function CustomerResearch({ persona }: Props) {
  const [activeTab, setActiveTab] = React.useState<'surveys' | 'interviews'>(
    'surveys'
  );

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Research Tools</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('surveys')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'surveys'
                ? 'bg-navy-100 text-navy-900'
                : 'text-gray-600'
            }`}
          >
            <FileText size={16} />
            <span>Surveys</span>
          </button>
          <button
            onClick={() => setActiveTab('interviews')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeTab === 'interviews'
                ? 'bg-navy-100 text-navy-900'
                : 'text-gray-600'
            }`}
          >
            <MessageSquare size={16} />
            <span>Interviews</span>
          </button>
        </div>
      </div>

      {activeTab === 'surveys' ? (
        <SurveyManager persona={persona} />
      ) : (
        <InterviewGuide persona={persona} />
      )}
    </div>
  );
}
