'use client';

import { LayoutRenderer } from '@kaushik-xs/rupa';
import type { LayoutNode } from '@kaushik-xs/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik-xs/rupa';
import { currentUser, profileData } from '@/lib/data';

export default function ProfilePage() {
  const config: LayoutNode = {
    type: 'container',
    props: {
      maxWidth: 'xl',
      padding: 6,
    },
    children: [
      {
        type: 'flex',
        props: {
          direction: 'column',
          gap: 6,
        },
        children: [
          {
            type: 'component',
            props: {
              component: 'Box',
              componentProps: {
                children: <h1 className="text-3xl font-bold">User Profile</h1>,
              },
            },
          },
          {
            type: 'component',
            props: {
              component: 'Card',
            },
            children: [
              {
                type: 'component',
                props: {
                  component: 'CardContent',
                  componentProps: {
                    className: 'pt-6',
                  },
                },
                children: [
                  {
                    type: 'flex',
                    props: {
                      gap: 6,
                      align: 'start',
                    },
                    children: [
                      {
                        type: 'component',
                        props: {
                          component: 'Avatar',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'AvatarImage',
                              componentProps: {
                                src: undefined,
                                alt: currentUser.name,
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'AvatarFallback',
                              componentProps: {
                                children: currentUser.name.split(' ').map(n => n[0]).join(''),
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
                            type: 'flex',
                            props: {
                              gap: 2,
                              align: 'center',
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'Box',
                                  componentProps: {
                                    children: <h2 className="text-2xl font-bold">{currentUser.name}</h2>,
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'Badge',
                                  componentProps: {
                                    variant: currentUser.status === 'active' ? 'default' : 'secondary',
                                    children: currentUser.status,
                                  },
                                },
                              },
                            ],
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Box',
                              componentProps: {
                                children: <p className="text-muted-foreground">{currentUser.email}</p>,
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Box',
                              componentProps: {
                                children: <p className="text-muted-foreground">Role: {currentUser.role}</p>,
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
          },
          {
            type: 'component',
            props: {
              component: 'Tabs',
              componentProps: {
                defaultValue: 'personal',
              },
            },
            children: [
              {
                type: 'component',
                props: {
                  component: 'TabsList',
                },
                children: [
                  {
                    type: 'component',
                    props: {
                      component: 'TabsTrigger',
                      componentProps: {
                        value: 'personal',
                        children: 'Personal',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'TabsTrigger',
                      componentProps: {
                        value: 'social',
                        children: 'Social',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'TabsTrigger',
                      componentProps: {
                        value: 'skills',
                        children: 'Skills',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'TabsTrigger',
                      componentProps: {
                        value: 'experience',
                        children: 'Experience',
                      },
                    },
                  },
                ],
              },
              {
                type: 'component',
                props: {
                  component: 'TabsContent',
                  componentProps: {
                    value: 'personal',
                  },
                },
                children: [
                  {
                    type: 'component',
                    props: {
                      component: 'Card',
                    },
                    children: [
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
                                children: 'Personal Information',
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
                            type: 'grid',
                            props: {
                              columns: { default: 1, md: 2 },
                              gap: 4,
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
                                        children: 'First Name',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Input',
                                      componentProps: {
                                        defaultValue: profileData.personal.firstName,
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
                                        children: 'Last Name',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Input',
                                      componentProps: {
                                        defaultValue: profileData.personal.lastName,
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
                                        children: 'Email',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Input',
                                      componentProps: {
                                        type: 'email',
                                        defaultValue: profileData.personal.email,
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
                                        children: 'Phone',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Input',
                                      componentProps: {
                                        defaultValue: profileData.personal.phone,
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
                                        children: 'Bio',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Textarea',
                                      componentProps: {
                                        defaultValue: profileData.personal.bio,
                                        rows: 4,
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
                  },
                ],
              },
              {
                type: 'component',
                props: {
                  component: 'TabsContent',
                  componentProps: {
                    value: 'social',
                  },
                },
                children: [
                  {
                    type: 'component',
                    props: {
                      component: 'Card',
                    },
                    children: [
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
                                children: 'Social Links',
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
                              gap: 4,
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
                                        children: 'Twitter',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Input',
                                      componentProps: {
                                        defaultValue: profileData.social.twitter,
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
                                        children: 'GitHub',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Input',
                                      componentProps: {
                                        defaultValue: profileData.social.github,
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
                                        children: 'LinkedIn',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Input',
                                      componentProps: {
                                        defaultValue: profileData.social.linkedin,
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
                  },
                ],
              },
              {
                type: 'component',
                props: {
                  component: 'TabsContent',
                  componentProps: {
                    value: 'skills',
                  },
                },
                children: [
                  {
                    type: 'component',
                    props: {
                      component: 'Card',
                    },
                    children: [
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
                                children: 'Skills',
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
                              wrap: 'wrap',
                              gap: 2,
                            },
                            children: profileData.skills.map((skill) => ({
                              type: 'component',
                              props: {
                                component: 'Badge',
                                componentProps: {
                                  variant: 'secondary',
                                  children: skill,
                                },
                              },
                            })),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'component',
                props: {
                  component: 'TabsContent',
                  componentProps: {
                    value: 'experience',
                  },
                },
                children: [
                  {
                    type: 'component',
                    props: {
                      component: 'Accordion',
                      componentProps: {
                        type: 'single',
                        collapsible: true,
                      },
                    },
                    children: profileData.experience.map((exp, index) => ({
                      type: 'component',
                      props: {
                        component: 'AccordionItem',
                        componentProps: {
                          value: `item-${index}`,
                        },
                      },
                      children: [
                        {
                          type: 'component',
                          props: {
                            component: 'AccordionTrigger',
                            componentProps: {
                              children: `${exp.title} at ${exp.company}`,
                            },
                          },
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'AccordionContent',
                            componentProps: {
                              children: (
                                <div className="space-y-2">
                                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                                  <p>{exp.description}</p>
                                </div>
                              ),
                            },
                          },
                        },
                      ],
                    })),
                  },
                ],
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

