import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Users, Target, ArrowUp } from 'lucide-react';
import FeedbackAnalysis from './FeedbackAnalysis';
import FeaturePrioritization from './FeaturePrioritization';
import RoadmapPlanner from './RoadmapPlanner';
import { fetchProductMetrics } from '../../api/product';

export default function ProductEvolution() {
  const { data: metrics } = useQuery({
    queryKey: ['productMetrics'],
    queryFn: fetchProductMetrics
  });

  return (
    <section id="product-evolution" className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Product Evolution</h2>
        <button className="btn-primary">Generate Roadmap</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FeedbackAnalysis />
        <FeaturePrioritization />
      </div>

      <RoadmapPlanner />
    </section>
  );
}