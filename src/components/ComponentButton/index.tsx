'use client';
import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

interface ComponentButtonProps extends ButtonProps {
  href: string;
}

const ComponentButton: FC<ComponentButtonProps> = ({
  href,
  variant = 'contained',
  children,
  color = 'primary',
  ...props
}) => {
  return (
    <Button
      component={Link}
      href={href}
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ComponentButton; 