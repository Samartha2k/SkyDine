// Export all utilities
export {
  generateRestaurantStructuredData,
  generateMenuItemStructuredData,
  generateBreadcrumbStructuredData,
  generateWebsiteStructuredData,
} from './structuredData';

export { showToast, showSuccess, showError, showInfo } from './toast';

export {
  contactFormSchema,
  validateContactForm,
  formatIndianPhone,
  sanitizeInput,
  type ContactFormData,
} from './validation';
