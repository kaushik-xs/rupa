'use client';

import { LayoutRenderer } from '@kaushik-xs/rupa';
import type { LayoutNode } from '@kaushik-xs/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik-xs/rupa';
import { products } from '@/lib/data';

export default function ECommercePage() {
  const config: LayoutNode = {
    type: 'container',
    props: {
      maxWidth: 'xl',
      padding: 6,
    },
    children: [
      {
        type: 'sidebarLayout',
        props: {
          sidebarWidth: 280,
        },
        children: [
          {
            type: 'box',
            props: {
              className: 'rounded-lg',
              padding: 4,
              background: 'muted',
            },
            children: [
              {
                type: 'component',
                props: {
                  component: 'Box',
                  componentProps: {
                    className: 'space-y-4',
                  },
                },
                children: [
                  {
                    type: 'component',
                    props: {
                      component: 'Box',
                      componentProps: {
                        children: <h3 className="font-semibold">Filters</h3>,
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'Box',
                      componentProps: {
                        className: 'space-y-4',
                      },
                    },
                    children: [
                      {
                        type: 'flex',
                        props: {
                          direction: 'column',
                          gap: 2,
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                children: 'Category',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Select',
                              componentProps: {
                                options: [
                                  { value: 'all', label: 'All Categories' },
                                  { value: 'electronics', label: 'Electronics' },
                                  { value: 'accessories', label: 'Accessories' },
                                ],
                                placeholder: 'Select category...',
                              },
                            },
                          },
                        ],
                      },
                      {
                        type: 'flex',
                        props: {
                          direction: 'column',
                          gap: 2,
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                children: 'Price Range',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Slider',
                              componentProps: {
                                defaultValue: [0, 1000],
                                max: 1000,
                                step: 10,
                              },
                            },
                          },
                        ],
                      },
                      {
                        type: 'flex',
                        props: {
                          direction: 'column',
                          gap: 2,
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                children: 'Options',
                              },
                            },
                          },
                          {
                            type: 'flex',
                            props: {
                              align: 'center',
                              gap: 2,
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'Checkbox',
                                  componentProps: {
                                    id: 'in-stock',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'Label',
                                  componentProps: {
                                    htmlFor: 'in-stock',
                                    children: 'In Stock Only',
                                  },
                                },
                              },
                            ],
                          },
                          {
                            type: 'flex',
                            props: {
                              align: 'center',
                              gap: 2,
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'Checkbox',
                                  componentProps: {
                                    id: 'on-sale',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'Label',
                                  componentProps: {
                                    htmlFor: 'on-sale',
                                    children: 'On Sale',
                                  },
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'Button',
                          componentProps: {
                            className: 'w-full',
                            children: 'Apply Filters',
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'flex',
            props: {
              direction: 'column',
              gap: 4,
            },
            children: [
              {
                type: 'flex',
                props: {
                  justify: 'between',
                  align: 'center',
                },
                children: [
                  {
                    type: 'component',
                    props: {
                      component: 'Box',
                      componentProps: {
                        children: <h2 className="text-xl font-bold">Products</h2>,
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'Badge',
                      componentProps: {
                        children: `${products.length} items`,
                      },
                    },
                  },
                ],
              },
              {
                type: 'cardLayout',
                props: {
                  columns: { default: 1, sm: 2, lg: 3 },
                  gap: 4,
                },
                children: products.map((product) => ({
                  type: 'component',
                  props: {
                    component: 'Card',
                  },
                  children: [
                    {
                      type: 'component',
                      props: {
                        component: 'Box',
                        componentProps: {
                          className: 'aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center',
                          children: (
                            <span className="text-muted-foreground">
                              {product.name}
                            </span>
                          ),
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'CardHeader',
                      },
                      children: [
                        {
                          type: 'component',
                          props: {
                            component: 'CardTitle',
                            componentProps: {
                              children: product.name,
                            },
                          },
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'CardDescription',
                            componentProps: {
                              children: product.description,
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'CardContent',
                      },
                      children: [
                        {
                          type: 'flex',
                          props: {
                            direction: 'column',
                            gap: 2,
                          },
                          children: [
                            {
                              type: 'flex',
                              props: {
                                gap: 2,
                                wrap: 'wrap',
                              },
                              children: [
                                {
                                  type: 'component',
                                  props: {
                                    component: 'Badge',
                                    componentProps: {
                                      variant: product.inStock ? 'default' : 'secondary',
                                      children: product.inStock ? 'In Stock' : 'Out of Stock',
                                    },
                                  },
                                },
                                { ...(product.onSale && {
                                  type: 'component',
                                  props: {
                                    component: 'Badge',
                                    componentProps: {
                                      variant: 'destructive',
                                      children: 'On Sale',
                                    },
                                  },
                                })},
                              ],
                            },
                            {
                              type: 'flex',
                              props: {
                                justify: 'between',
                                align: 'center',
                              },
                              children: [
                                {
                                  type: 'component',
                                  props: {
                                    component: 'Box',
                                    componentProps: {
                                      children: <span className="font-bold text-lg">${product.price.toFixed(2)}</span>,
                                    },
                                  },
                                },
                                {
                                  type: 'component',
                                  props: {
                                    component: 'Button',
                                    componentProps: {
                                      size: 'sm',
                                      children: 'Add to Cart',
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                })),
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <LayoutRenderer config={config} />
    </div>
  );
}

