import * as React from 'react';
import SelectComponent, { StylesConfig, Props as ReactSelectProps } from 'react-select';
import { cn } from '../../utils/cn';

export interface SelectProps extends Omit<ReactSelectProps, 'styles'> {
  className?: string;
  customStyles?: StylesConfig;
}

const Select = React.forwardRef<any, SelectProps>(
  ({ className, customStyles, ...props }, ref) => {
    const defaultStyles: StylesConfig = {
      control: (base, state) => ({
        ...base,
        minHeight: '40px',
        borderColor: state.isFocused ? 'hsl(var(--ring))' : 'hsl(var(--input))',
        boxShadow: state.isFocused
          ? '0 0 0 2px hsl(var(--ring))'
          : 'none',
        '&:hover': {
          borderColor: 'hsl(var(--input))',
        },
      }),
      option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
          ? 'hsl(var(--primary))'
          : state.isFocused
          ? 'hsl(var(--accent))'
          : 'transparent',
        color: state.isSelected
          ? 'hsl(var(--primary-foreground))'
          : 'hsl(var(--foreground))',
        cursor: 'pointer',
      }),
      menu: (base) => ({
        ...base,
        backgroundColor: 'hsl(var(--popover))',
        border: '1px solid hsl(var(--border))',
        borderRadius: 'calc(var(--radius) - 2px)',
      }),
      ...customStyles,
    };

    return (
      <div className={cn('w-full', className)}>
        <SelectComponent
          ref={ref}
          styles={defaultStyles}
          classNamePrefix="react-select"
          {...props}
        />
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Select };

