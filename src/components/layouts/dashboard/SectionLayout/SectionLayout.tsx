import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';
import { responsiveSpacingToClass } from '../../../../utils/tailwind';

export interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  sections?: Array<{
    id?: string;
    title?: string;
    content?: React.ReactNode;
    divider?: boolean;
  }>;
  showDividers?: boolean;
  sectionSpacing?: number | string;
}

export const SectionLayout = React.forwardRef<HTMLDivElement, SectionLayoutProps>(
  (
    {
      className,
      sections,
      showDividers = true,
      sectionSpacing = 8,
      padding,
      paddingX,
      paddingY,
      margin,
      marginX,
      marginY,
      background,
      border,
      borderRadius,
      shadow,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const spacingClass = typeof sectionSpacing === 'number' ? `space-y-${sectionSpacing}` : `space-y-[${sectionSpacing}]`;

    const classes = cn(
      'flex flex-col',
      spacingClass,
      responsiveSpacingToClass('p', padding),
      responsiveSpacingToClass('px', paddingX),
      responsiveSpacingToClass('py', paddingY),
      responsiveSpacingToClass('m', margin),
      responsiveSpacingToClass('mx', marginX),
      responsiveSpacingToClass('my', marginY),
      background && `bg-${background}`,
      border === true && 'border',
      typeof border === 'string' && `border-${border}`,
      borderRadius && (typeof borderRadius === 'number' ? `rounded-${borderRadius}` : `rounded-${borderRadius}`),
      className
    );

    return (
      <div ref={ref} className={classes} style={style} {...props}>
        {sections ? (
          sections.map((section: { id?: string; title?: string; content?: React.ReactNode; divider?: boolean }, index: number) => (
            <section key={section.id || index} className="flex flex-col">
              {section.title && (
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              )}
              {section.content}
              {showDividers && section.divider !== false && index < sections.length - 1 && (
                <div className="border-b border-border mt-4 mb-4" />
              )}
            </section>
          ))
        ) : (
          children
        )}
      </div>
    );
  }
);

SectionLayout.displayName = 'SectionLayout';

