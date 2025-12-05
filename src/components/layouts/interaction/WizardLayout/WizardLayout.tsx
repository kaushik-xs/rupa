import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';
import { StepperLayout, Step } from '../StepperLayout/StepperLayout';

export interface WizardStep extends Step {
  component?: React.ComponentType<any>;
  onNext?: () => boolean | Promise<boolean>;
  onBack?: () => void;
  onComplete?: () => void;
}

export interface WizardLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  steps?: WizardStep[];
  currentStep?: number;
  onStepChange?: (step: number) => void;
  showProgress?: boolean;
  showNavigation?: boolean;
}

export const WizardLayout = React.forwardRef<HTMLDivElement, WizardLayoutProps>(
  (
    {
      className,
      steps,
      currentStep: controlledStep,
      onStepChange,
      showProgress = true,
      showNavigation = true,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const [internalStep, setInternalStep] = React.useState(0);
    const currentStep = controlledStep !== undefined ? controlledStep : internalStep;

    const handleNext = async () => {
      if (!steps) return;
      const currentStepData = steps[currentStep];
      
      if (currentStepData.onNext) {
        const canProceed = await currentStepData.onNext();
        if (!canProceed) return;
      }

      if (currentStep < steps.length - 1) {
        const newStep = currentStep + 1;
        if (onStepChange) {
          onStepChange(newStep);
        } else {
          setInternalStep(newStep);
        }
      } else if (currentStepData.onComplete) {
        currentStepData.onComplete();
      }
    };

    const handleBack = () => {
      if (!steps) return;
      const currentStepData = steps[currentStep];
      
      if (currentStepData.onBack) {
        currentStepData.onBack();
      }

      if (currentStep > 0) {
        const newStep = currentStep - 1;
        if (onStepChange) {
          onStepChange(newStep);
        } else {
          setInternalStep(newStep);
        }
      }
    };

    const progress = steps ? ((currentStep + 1) / steps.length) * 100 : 0;

    const classes = cn('flex flex-col', className);

    return (
      <div ref={ref} className={classes} style={style} {...props}>
        {showProgress && steps && (
          <div className="mb-6">
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-muted-foreground text-center">
              Step {currentStep + 1} of {steps.length}
            </div>
          </div>
        )}

        {steps ? (
          <>
            <StepperLayout
              steps={steps}
              currentStep={currentStep}
              orientation="horizontal"
            />
            {steps[currentStep]?.component && (
              <div className="mt-8">
                {React.createElement(steps[currentStep].component!)}
              </div>
            )}
            {showNavigation && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={cn(
                    'px-4 py-2 rounded-md border',
                    currentStep === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-muted'
                  )}
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                </button>
              </div>
            )}
          </>
        ) : (
          children
        )}
      </div>
    );
  }
);

WizardLayout.displayName = 'WizardLayout';

