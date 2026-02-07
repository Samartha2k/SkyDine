import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill';
}

/**
 * Optimized Image component with lazy loading and placeholder
 * Uses Intersection Observer for efficient loading
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = '16/9',
  priority = false,
  objectFit = 'cover',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, isInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px', // Start loading slightly before it enters viewport
  });

  // For priority images, load immediately
  const shouldLoad = priority || isInView;

  useEffect(() => {
    if (shouldLoad && !isLoaded) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setHasError(true);
    }
  }, [shouldLoad, src, isLoaded]);

  const containerStyle: React.CSSProperties = {
    aspectRatio,
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.5s ease-out',
  };

  if (hasError) {
    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`image-placeholder flex items-center justify-center bg-charcoal ${className}`}
        style={containerStyle}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <svg
          className="w-8 h-8 text-cream/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative ${className}`}
      style={containerStyle}
    >
      {/* Placeholder / Shimmer */}
      {!isLoaded && (
        <div
          className="absolute inset-0 image-placeholder"
          aria-hidden="true"
        />
      )}

      {/* Actual Image */}
      {(shouldLoad || isLoaded) && (
        <img
          src={src}
          alt={alt}
          style={imageStyle}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
