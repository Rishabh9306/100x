import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Globe, Shield, Building, Users } from 'lucide-react';
import GeographicAnalysis from './GeographicAnalysis';
import RegulatoryCompliance from './RegulatoryCompliance';
import CulturalFit from './CulturalFit';
import { fetchExpansionOpportunities } from '../../api/expansion';

export default function MarketExpansion() {
  const { data: opportunities } = useQuery({
    queryKey: ['expansionOpportunities'],
    queryFn: fetchExpansionOpportunities
  });

  return (
    <section id="market-expansion" className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Market Expansion</h2>
        <button className="btn-primary">Analyze New Market</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GeographicAnalysis />
        <RegulatoryCompliance />
      </div>

      <CulturalFit />
    </section>
  );
}