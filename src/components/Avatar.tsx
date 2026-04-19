import React from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
}

const sizeStyles = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg'
};

export default function Avatar({ src, alt, size = 'md', fallback }: AvatarProps) {
  const [imgError, setImgError] = React.useState(false);

  const handleError = () => setImgError(true);

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={alt}
        onError={handleError}
        className={`${sizeStyles[size]} rounded-full object-cover`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`${sizeStyles[size]} rounded-full bg-[var(--accent)] text-white flex items-center justify-center uppercase`}
      aria-label={alt}
    >
      {fallback || alt.charAt(0)}
    </div>
  );
}