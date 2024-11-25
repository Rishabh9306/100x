import React from 'react';
import { TrendingUp, Activity, Zap, Shield } from 'lucide-react';
import { MarketTrend } from '../../types/market';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  trend: MarketTrend;
}

export default function TrendAnalysis({ trend }: Props) {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Growth Rate',
        data: [trend.growthRate * 0.8, trend.growthRate * 0.9, trend.growthRate, 
               trend.growthRate * 1.1, trend.growthRate * 1.2, trend.growthRate * 1.3],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Market Growth Trend',
      },
    },
  };

  const metrics = [
    {
      label: 'Growth Rate',
      value: `${(trend.growthRate * 100).toFixed(1)}%`,
      icon: TrendingUp,
      color: 'text-blue-500',
    },
    {
      label: 'Market Maturity',
      value: trend.maturityLevel,
      icon: Activity,
      color: 'text-green-500',
    },
    {
      label: 'Tech Adoption',
      value: `${(trend.technologyAdoption * 100).toFixed(1)}%`,
      icon: Zap,
      color: 'text-yellow-500',
    },
    {
      label: 'Regulatory Risk',
      value: trend.regulatoryRisk,
      icon: Shield,
      color: 'text-red-500',
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Market Trend Analysis</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="card">
            <metric.icon className={metric.color} size={20} />
            <h4 className="mt-2 text-sm font-medium text-gray-700">{metric.label}</h4>
            <p className="mt-1 text-lg font-semibold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <Line options={chartOptions} data={chartData} />
      </div>
    </div>
  );
}