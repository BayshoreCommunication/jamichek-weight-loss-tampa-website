"use client";

import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbSectionProps {
  title: string;
  title2?: React.ReactNode;
  highlight?: string;
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  title,
  title2,
  highlight,
  items,
  className,
}) => {
  return (
    <section
      className={`relative lg:-mt-80 pt-16 lg:pt-80 pb-14 text-center bg-[#f6fff0] ${
        className || ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-gray-500 leading-relaxed"
        >
          <ol className="flex items-center justify-center gap-1.5 flex-wrap leading-relaxed">
            {items.map((item, index) => (
              <li key={index} className="flex items-center leading-relaxed">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors font-medium leading-relaxed"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-primary">
                    {item.label}
                  </span>
                )}
                {index < items.length - 1 && (
                  <span className="ml-1.5 text-gray-300">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 leading-snug tracking-tight">
          {title}
          {highlight && <span className="text-primary px-2">{highlight}</span>}
          {title2}
        </h1>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
