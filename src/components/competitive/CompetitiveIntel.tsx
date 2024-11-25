// import React from 'react';
import CompetitorList from './CompetitorList';
import FeatureMatrix from './FeatureMatrix';
import MarketShareAnalysis from './MarketShareAnalysis';
import PricingAnalysis from './PricingAnalysis';
import { useCompetitorStore } from '../../stores/competitorStore';

export default function CompetitiveIntel() {
  const { competitors, analysis } = useCompetitorStore();

  return (
    <section id="competitive-intel" className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Competitive Intelligence</h2>
        <button className="btn-primary">Generate Report</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CompetitorList competitors={competitors} />
        <MarketShareAnalysis data={analysis?.marketShare} />
      </div>

      <div className="grid grid-cols-1 gap-8">
        <FeatureMatrix data={analysis?.featureComparison} />
        <PricingAnalysis data={analysis?.pricingAnalysis} />
      </div>
    </section>
  );
}