"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardHeader } from "@/components/ui/card";
import React from "react";

interface EducationCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const EducationCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  description,
}: EducationCardProps) => {
  return (
    <div className="block cursor-pointer">
      <div className="flex shadow-none py-6 border-b border-neutral-700">
        <div className="flex-none mr-4">
          <Avatar className="border border-black dark:border-white size-16 md:size-20 bg-muted-background">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>

        {/* Content on the right */}
        <div className="flex-grow">
          <CardHeader className="p-0">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-x-2 text-base">
              {/* Title - Increased size to text-xl */}
              <h3 className="inline-flex items-center text-lg md:text-2xl lg:text-4xl font-medium text-yellow-50">
                {title}
              </h3>
              
              <div className="text-xs md:text-lg tabular-nums text-right text-yellow-50">
                {period}
              </div>
            </div>
            {/* Subtitle - Increased size to text-base */}
            {subtitle && <div className="text-md md:text-xl lg:text-2xl mt-1 text-yellow-50">{subtitle}</div>}
          </CardHeader>
          {/* Description - Increased size to text-sm sm:text-base */}
          {description && (
            <div
              className="mt-4 text-xs md:text-lg lg:text-xl whitespace-pre-line text-yellow-50"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
      </div>
    </div>
  );
};