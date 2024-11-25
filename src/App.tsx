import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MarketAnalysis from './components/market/MarketAnalysis';
import CustomerDiscovery from './components/customer/CustomerDiscovery';
import CompetitiveIntel from './components/competitive/CompetitiveIntel';
import ProductEvolution from './components/product/ProductEvolution';
import MarketExpansion from './components/expansion/MarketExpansion';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <Header />
        
        <main className="ml-64 pt-16">
          <div className="p-6 max-w-7xl mx-auto space-y-12">
            <MarketAnalysis />
            <CustomerDiscovery />
            <CompetitiveIntel />
            <ProductEvolution />
            <MarketExpansion />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;