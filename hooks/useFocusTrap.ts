import { useEffect, RefObject } from 'react';

/**
 * Hook to trap focus within a container when it's open
 * Essential for accessibility in modals, navigation, etc.
 */
export const useFocusTrap = (
  isOpen: boolean,
  containerRef: RefObject<HTMLElement | null>
): void => {
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const container = containerRef.current;

    // Get all focusable elements
    const getFocusableElements = (): HTMLElement[] => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'textarea:not([disabled])',
        'select:not([disabled])',
        'details',
        'summary',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');

      return Array.from(container.querySelectorAll(focusableSelectors));
    };

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Store the element that had focus before opening
    const previouslyFocusedElement = document.activeElement as HTMLElement;

    // Focus the first element after a short delay to ensure render is complete
    const focusTimer = setTimeout(() => {
      firstElement.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle Tab key
      if (e.key === 'Tab') {
        // Shift + Tab - go backwards
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab - go forwards
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }

      // Handle Escape key - close the container
      if (e.key === 'Escape') {
        // Call close callback if provided via a custom event or ref
        const closeButton = container.querySelector('[data-close-trigger]') as HTMLElement;
        if (closeButton) {
          closeButton.click();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      container.removeEventListener('keydown', handleKeyDown);
      // Return focus to the previously focused element when closing
      if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
        previouslyFocusedElement.focus();
      }
    };
  }, [isOpen, containerRef]);
};

export default useFocusTrap;
