export interface ToastOptions {
  duration?: number;
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
}

/**
 * Utility to show toast notifications using the DOM
 * This can be used outside of React components
 */
export const showToast = (
  message: string,
  type: 'success' | 'error' | 'info' = 'info',
  options: ToastOptions = {}
): void => {
  const { duration = 3000, position = 'bottom-right' } = options;

  // Find or create toast container
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');
    document.body.appendChild(container);
  }

  // Update position
  container.style.position = 'fixed';
  container.style.zIndex = '9999';

  // Set position styles
  switch (position) {
    case 'top-right':
      container.style.top = '2rem';
      container.style.right = '2rem';
      break;
    case 'top-left':
      container.style.top = '2rem';
      container.style.left = '2rem';
      break;
    case 'bottom-left':
      container.style.bottom = '2rem';
      container.style.left = '2rem';
      break;
    case 'bottom-right':
    default:
      container.style.bottom = '2rem';
      container.style.right = '2rem';
      break;
  }

  // Create toast element
  const toast = document.createElement('div');
  const id = Math.random().toString(36).substr(2, 9);
  toast.id = `toast-${id}`;
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  // Toast content
  const icon = type === 'success'
    ? '✓'
    : type === 'error'
    ? '✕'
    : 'ℹ';

  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="text-lg" aria-hidden="true">${icon}</span>
      <span class="font-sans text-sm">${message}</span>
    </div>
  `;

  // Add custom styles if not already added
  if (!document.getElementById('toast-styles')) {
    const styles = document.createElement('style');
    styles.id = 'toast-styles';
    styles.textContent = `
      .toast-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        pointer-events: none;
      }
      .toast {
        background: #1c1c1c;
        border: 1px solid rgba(248, 249, 250, 0.1);
        border-radius: 0.5rem;
        padding: 1rem 1.5rem;
        color: #F8F9FA;
        font-family: "Jost", sans-serif;
        animation: slideIn 0.3s ease-out;
        pointer-events: auto;
        min-width: 250px;
      }
      .toast-success { border-left: 3px solid #22c55e; }
      .toast-error { border-left: 3px solid #D32F2F; }
      .toast-info { border-left: 3px solid #3b82f6; }
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(styles);
  }

  // Add to container
  container.appendChild(toast);

  // Remove after duration
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, duration);
};

export const showSuccess = (message: string, options?: ToastOptions) =>
  showToast(message, 'success', options);

export const showError = (message: string, options?: ToastOptions) =>
  showToast(message, 'error', options);

export const showInfo = (message: string, options?: ToastOptions) =>
  showToast(message, 'info', options);
