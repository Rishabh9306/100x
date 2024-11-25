import React from 'react';
import { useForm } from 'react-hook-form';
import { Search } from 'lucide-react';

interface FormInputs {
  industry: string;
  region: string;
  timeframe: number;
}

interface Props {
  onSubmit: (data: FormInputs) => void;
  isLoading: boolean;
}

export default function AnalysisForm({ onSubmit, isLoading }: Props) {
  const { register, handleSubmit } = useForm<FormInputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Industry</label>
          <input
            {...register('industry')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
            placeholder="e.g., SaaS, FinTech"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Region</label>
          <input
            {...register('region')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
            placeholder="e.g., North America"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Timeframe (years)</label>
          <input
            type="number"
            {...register('timeframe', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
            placeholder="5"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full flex items-center justify-center space-x-2"
      >
        <Search size={20} />
        <span>{isLoading ? 'Analyzing...' : 'Analyze Market'}</span>
      </button>
    </form>
  );
}