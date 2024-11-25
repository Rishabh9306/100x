import React from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown, TrendingUp } from 'lucide-react';

export default function FeedbackAnalysis() {
  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Feedback Analysis</h3>
        <button className="btn-primary">Collect Feedback</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <ThumbsUp className="text-green-500" size={20} />
            <span className="font-medium text-green-700">Positive Feedback</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-green-700">78%</p>
        </div>

        <div className="p-4 bg-red-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <ThumbsDown className="text-red-500" size={20} />
            <span className="font-medium text-red-700">Areas for Improvement</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-red-700">22%</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Recent Feedback</h4>
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border rounded-lg">
            <div className="flex items-start space-x-3">
              <MessageSquare className="text-gray-400" size={20} />
              <div>
                <p className="text-gray-600">Great product, but could use more customization options.</p>
                <p className="text-sm text-gray-400 mt-1">2 hours ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}