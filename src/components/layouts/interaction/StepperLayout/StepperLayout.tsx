import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';
import { Check } from 'lucide-react';

export interface Step {
  id: string;
  label: string;
  description?: string;
  content?: React.ReactNode;
  completed?: boolean;
  disabled?: boolean;
}

export interface StepperLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  steps?: Step[];
  currentStep?: number;
  orientation?: 'horizontal' | 'vertical';
  showConnector?: boolean;
}

export const StepperLayout = React.forwardRef<HTMLDivElement, StepperLayoutProps>(
  (
    {
      className,
      steps,
      currentStep = 0,
      orientation = 'horizontal',
      showConnector = true,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === 'horizontal';

    const classes = cn(
      'flex',
      isHorizontal ? 'flex-row' : 'flex-col',
      className
    );

    return (
      <div ref={ref} className={classes} style={style} {...props}>
        {steps ? (
          <>
            <div className={cn('flex', isHorizontal ? 'flex-row items-center' : 'flex-col')}>
              {steps.map((step: Step, index: number) => {
                const isActive = index === currentStep;
                const isCompleted = step.completed || index < currentStep;
                const isDisabled = step.disabled || index > currentStep;

                return (
                  <React.Fragment key={step.id}>
                    <div
                      className={cn(
                        'flex items-center',
                        isHorizontal ? 'flex-col' : 'flex-row'
                      )}
                    >
                      <div
                        className={cn(
                          'flex items-center justify-center rounded-full border-2 transition-colors',
                          'w-10 h-10 text-sm font-medium',
                          isCompleted
                            ? 'bg-primary border-primary text-primary-foreground'
                            : isActive
                            ? 'border-primary text-primary'
                            : 'border-muted text-muted-foreground',
                          isDisabled && 'opacity-50'
                        )}
                      >
                        {isCompleted ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div
                        className={cn(
                          isHorizontal ? 'mt-2 text-center' : 'ml-3'
                        )}
                      >
                        <div
                          className={cn(
                            'font-medium',
                            isActive && 'text-primary',
                            isDisabled && 'text-muted-foreground'
                          )}
                        >
                          {step.label}
                        </div>
                        {step.description && (
                          <div className="text-sm text-muted-foreground">
                            {step.description}
                          </div>
                        )}
                      </div>
                    </div>
                    {showConnector && index < steps.length - 1 && (
                      <div
                        className={cn(
                          isHorizontal ? 'w-16 h-0.5 mx-2' : 'h-16 w-0.5 my-2',
                          isCompleted ? 'bg-primary' : 'bg-muted'
                        )}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            {steps[currentStep]?.content && (
              <div className="mt-8">{steps[currentStep].content}</div>
            )}
          </>
        ) : (
          children
        )}
      </div>
    );
  }
);

StepperLayout.displayName = 'StepperLayout';

