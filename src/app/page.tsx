import { MultiStep } from '@/components/MultiStep';

export default function Home() {
  return (
    <div className="flex border-2 border-gray-400">
      <MultiStep steps={4} currentStep={2} />
    </div>
  );
}
