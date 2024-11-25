import React from 'react';
import { MessageSquare, Calendar, Clock, Download } from 'lucide-react';
import { CustomerPersona } from '../../types/customer';

interface Props {
  persona: CustomerPersona;
}

export default function InterviewGuide({ persona }: Props) {
  const interviews = [
    {
      id: '1',
      customerName: 'John Smith',
      date: '2024-03-15',
      time: '10:00 AM',
      status: 'scheduled'
    },
    {
      id: '2',
      customerName: 'Sarah Johnson',
      date: '2024-03-16',
      time: '2:30 PM',
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-700">Interview Schedule</h4>
        <button className="btn-primary flex items-center space-x-2">
          <Calendar size={16} />
          <span>Schedule Interview</span>
        </button>
      </div>

      <div className="space-y-4">
        {interviews.map((interview) => (
          <div key={interview.id} className="p-4 border rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <MessageSquare className="text-gray-400" size={20} />
                <div>
                  <p className="font-medium text-gray-900">{interview.customerName}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{interview.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>{interview.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                interview.status === 'completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {interview.status}
              </span>
            </div>

            {interview.status === 'completed' && (
              <div className="mt-4 flex items-center space-x-4">
                <button className="text-sm text-navy-600 hover:text-navy-700 flex items-center space-x-1">
                  <Download size={14} />
                  <span>Download Notes</span>
                </button>
                <button className="text-sm text-navy-600 hover:text-navy-700">
                  View Insights
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg space-y-4">
        <h4 className="font-medium text-gray-700">Interview Guide</h4>
        <div className="space-y-3">
          <div className="p-3 bg-white rounded-lg">
            <p className="text-sm font-medium text-gray-700">Goals & Objectives</p>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• Understand current workflow challenges</li>
              <li>• Identify key pain points in the process</li>
              <li>• Gather feedback on potential solutions</li>
            </ul>
          </div>
          <div className="p-3 bg-white rounded-lg">
            <p className="text-sm font-medium text-gray-700">Key Questions</p>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>1. What's your typical day like?</li>
              <li>2. What challenges do you face most often?</li>
              <li>3. How do you currently solve these problems?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}