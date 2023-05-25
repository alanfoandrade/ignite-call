interface MultiStepProps {
  steps: number;
  currentStep?: number;
}

export function MultiStep({ steps, currentStep = 1 }: MultiStepProps) {
  return (
    <div>
      <label className="text-gray-200">
        Paso {currentStep} de {steps}
      </label>

      <div className={`grid grid-cols-[${steps}] mt-1 gap-2`}>
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`h-1 rounded-px bg-gray-600${
              currentStep >= step ? 'bg-gray-100' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}

MultiStep.displayName = 'MultiStep';
