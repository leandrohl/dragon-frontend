import React from 'react';
import './styles.scss';

interface InputProps {
  name: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  errorMessage?: string;
  disabled?: boolean;
}

const Input = ({
  name,
  label,
  onChange,
  value,
  className = '',
  type = 'text',
  variant = 'primary',
  errorMessage,
  disabled = false,
}: InputProps) => {
  const inputClassName = `input ${variant} ${errorMessage ? 'error' : ''} ${
    disabled ? 'disabled' : ''
  }`;

  return (
    <div className={`input-container ${className}`}>
      <label htmlFor={name} className={`label ${variant}`}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className={inputClassName}
        disabled={disabled}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default Input;
