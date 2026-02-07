import { describe, it, expect } from 'vitest';

/**
 * Email validation regex
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Phone number validation (Indian format)
 */
export const isValidPhone = (phone: string): boolean => {
  // Matches Indian phone numbers with or without country code
  const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Required field validation
 */
export const isRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Min length validation
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

/**
 * Max length validation
 */
export const hasMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength;
};

// Tests
describe('Email Validation', () => {
  it('should validate correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co.in')).toBe(true);
    expect(isValidEmail('user+tag@example.org')).toBe(true);
  });

  it('should reject invalid email addresses', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('notanemail')).toBe(false);
    expect(isValidEmail('missing@domain')).toBe(false);
    expect(isValidEmail('@nodomain.com')).toBe(false);
    expect(isValidEmail('spaces in@email.com')).toBe(false);
  });
});

describe('Phone Validation', () => {
  it('should validate correct Indian phone numbers', () => {
    expect(isValidPhone('9876543210')).toBe(true);
    expect(isValidPhone('+91 9876543210')).toBe(true);
    expect(isValidPhone('+919876543210')).toBe(true);
    expect(isValidPhone('8765432109')).toBe(true);
  });

  it('should reject invalid phone numbers', () => {
    expect(isValidPhone('')).toBe(false);
    expect(isValidPhone('123456789')).toBe(false); // Too short
    expect(isValidPhone('12345678901234')).toBe(false); // Too long
    expect(isValidPhone('abcdefghij')).toBe(false); // Not numbers
  });
});

describe('Required Field Validation', () => {
  it('should validate non-empty strings', () => {
    expect(isRequired('hello')).toBe(true);
    expect(isRequired('  text with spaces  ')).toBe(true);
  });

  it('should reject empty or whitespace-only strings', () => {
    expect(isRequired('')).toBe(false);
    expect(isRequired('   ')).toBe(false);
    expect(isRequired('\t\n')).toBe(false);
  });
});

describe('Length Validation', () => {
  it('should validate minimum length', () => {
    expect(hasMinLength('hello', 3)).toBe(true);
    expect(hasMinLength('hi', 2)).toBe(true);
    expect(hasMinLength('a', 5)).toBe(false);
  });

  it('should validate maximum length', () => {
    expect(hasMaxLength('hello', 10)).toBe(true);
    expect(hasMaxLength('hi', 2)).toBe(true);
    expect(hasMaxLength('toolongtext', 5)).toBe(false);
  });
});
