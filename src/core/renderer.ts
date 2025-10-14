import { ComponentNode, Renderer, RendererConfig } from '../types';

export class DOMRenderer implements Renderer {
  render(component: ComponentNode, config: RendererConfig): HTMLElement {
    const element = document.createElement(component.type);
    
    // Apply props
    Object.entries(component.props).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'children') {
        // Handle children separately
        return;
      } else if (key.startsWith('on') && typeof value === 'function') {
        // Handle event listeners
        const eventName = key.slice(2).toLowerCase();
        element.addEventListener(eventName, value);
      } else {
        element.setAttribute(key, String(value));
      }
    });

    // Handle children
    if (component.children) {
      component.children.forEach(child => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(this.render(child, config));
        }
      });
    }

    return element;
  }

  mount(element: HTMLElement, container: HTMLElement | string): void {
    const target = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (target) {
      target.appendChild(element);
    }
  }

  unmount(element: HTMLElement): void {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

export class ReactRenderer implements Renderer {
  render(component: ComponentNode, config: RendererConfig): any {
    // This would integrate with React's createElement
    // For now, return a simple object structure
    return {
      type: component.type,
      props: component.props,
      children: component.children?.map(child => 
        typeof child === 'string' ? child : this.render(child, config)
      )
    };
  }

  mount(element: any, container: HTMLElement | string): void {
    // React mounting logic would go here
    console.log('React mounting not implemented yet');
  }

  unmount(element: any): void {
    // React unmounting logic would go here
    console.log('React unmounting not implemented yet');
  }
}

export class RendererFactory {
  static create(target: 'dom' | 'react' | 'vue' | 'svelte'): Renderer {
    switch (target) {
      case 'dom':
        return new DOMRenderer();
      case 'react':
        return new ReactRenderer();
      case 'vue':
        throw new Error('Vue renderer not implemented yet');
      case 'svelte':
        throw new Error('Svelte renderer not implemented yet');
      default:
        throw new Error(`Unsupported renderer target: ${target}`);
    }
  }
}
