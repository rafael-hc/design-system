/* eslint-disable prettier/prettier */
import { Text } from './Text'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ currentStep = 1, size }: MultiStepProps) {
  return (
    <div>
      <Text className="text-xs text-gray-200">
        Passo {currentStep} de {size}
      </Text>
      <div className={String(`mt-1 grid grid-cols-${size} gap-2`)}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return (
            <div
              key={step}
              className={`${currentStep >= step ? 'bg-gray-100' : 'bg-gray-600'
                } h-1 rounded-px `}
            />
          )
        })}
      </div>
    </div>
  )
}
