import { ReactNode } from 'react';
import './styles.scss';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

function Button ({
  onClick,
  children,
  className = '',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const buttonClassName = `button ${variant} ${disabled || loading ? 'disabled' : ''} ${fullWidth && 'fullWidth'}`;

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
