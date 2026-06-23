import * as React from "react";

type DashboardLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function DashboardLayout({
  title,
  subtitle,
  children,
}: DashboardLayoutProps) {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      <div>{children}</div>
    </div>
  );
}
