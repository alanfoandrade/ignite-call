interface MultiStepProps {
  steps: number;
  currentStep?: number;
}

export function MultiStep({ steps, currentStep = 1 }: MultiStepProps) {
  return (
    <div className="w-full">
      <label className="text-gray-200">
        Passo {currentStep} de {steps}
      </label>

      <div className={`mt-1 grid grid-cols-4 gap-2`}>
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`h-1 rounded-px ${
              currentStep >= step ? 'bg-gray-100' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
