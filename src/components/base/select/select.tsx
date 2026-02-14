import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  children?: React.ReactNode;
  selectedKey?: string;
  onSelectionChange?: (key: string) => void;
  items?: { id: string; label: string }[];
  size?: "sm" | "md" | "lg";
  className?: string;
  "aria-label"?: string;
}

export function Select({
  children,
  selectedKey,
  onSelectionChange,
  items,
  className,
  ...props
}: SelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectionChange?.(event.target.value);
  };

  return (
    <div className={cn("relative", className)}>
      <select
        className="w-full appearance-none rounded-lg border border-input bg-background py-2 pl-3 pr-10 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        value={selectedKey}
        onChange={handleChange}
        aria-label={props["aria-label"]}
      >
        {items
          ? items.map((item) => (
              <option
                key={item.id}
                value={item.id}
                className="bg-background text-foreground"
              >
                {item.label}
              </option>
            ))
          : children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}

Select.Item = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <option value={id} className="bg-background text-foreground">
    {children}
  </option>
);
