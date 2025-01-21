import React from 'react';
import './styles.scss';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  onClick,
  children,
  className = '',
  variant = 'primary',
  disabled = false,
  loading = false,
}: ButtonProps) => {
  const buttonClassName = `button ${variant} ${disabled || loading ? 'disabled' : ''}`;

  return (
    <button
      onClick={onClick}
      className={`${buttonClassName} ${className}`}
      disabled={disabled || loading}
    >
      {loading ? <span className="loader"></span> : children}
    </button>
  );
};

export default Button;
