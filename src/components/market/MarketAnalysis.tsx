import React from 'react';
import MarketSizeCalculator from './MarketSizeCalculator';
import TrendAnalysis from './TrendAnalysis';
import AnalysisForm from './AnalysisForm';
import { useMarketAnalysis } from '../../hooks/useMarketAnalysis';

export default function MarketAnalysis() {
  const { analyze, isLoading, data } = useMarketAnalysis();

  return (
    <section id="market-analysis" className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Market Analysis</h2>
        <button className="btn-primary">
          Generate Report
        </button>
      </div>

      <AnalysisForm onSubmit={analyze} isLoading={isLoading} />

      {data && (
        <>
          <MarketSizeCalculator marketSize={data.marketSize} />
          <TrendAnalysis trend={data.trends} />
        </>
      )}
    </section>
  );
}