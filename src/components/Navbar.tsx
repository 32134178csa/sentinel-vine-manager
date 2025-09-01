// Navbar components as functional components with class names
import React, { ReactNode, ElementType, HTMLAttributes, AnchorHTMLAttributes, ComponentPropsWithoutRef } from "react";
import Link, { LinkProps } from "next/link";

interface NavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Nav({ children, className, ...props }: NavProps) {
  return <nav {...props} className={`nav ${className || ""}`}>{children}</nav>;
}

export function NavLogo({ children, className, ...props }: DivProps) {
  return (
    <div {...props} className={`nav-logo ${className || ""}`}>
      {children}
    </div>
  );
}

type NavItemProps<C extends ElementType = 'div'> = {
  as?: C;
  href?: string;
  linkProps?: LinkProps;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'href'>;

export function NavItem<C extends ElementType = 'div'>({
  as,
  href,
  linkProps,
  children,
  className,
  ...rest
}: NavItemProps<C>) {
  const Component = as || 'div';

  if (as === (Link as unknown as C)) {
    return (
      <Link href={href!} {...linkProps}>
        <a className={`nav-item ${className || ''}`} {...rest}>
          {children}
        </a>
      </Link>
    );
  }

  if (Component === 'a') {
    return (
      <a href={href} className={`nav-item ${className || ''}`} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <Component className={`nav-item ${className || ''}`} {...(rest as ComponentPropsWithoutRef<C>)}>
      {children}
    </Component>
  );
}

export function NavMenu({ children, className, ...props }: DivProps) {
  return <div {...props} className={`nav-menu ${className || ""}`}>{children}</div>;
}

export function NavChevron({ children, className, ...props }: DivProps) {
  return <div {...props} className={`nav-chevron ${className || ""}`}>{children}</div>;
}