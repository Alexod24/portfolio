import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Tabs({ className, ...props }: TabsProps) {
  return <div className={cn("", className)} {...props} />;
}

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { id: string; label: string }[];
  selectedKey?: string;
  onSelectionChange?: (key: string) => void;
  type?: "underline" | "pills";
  size?: "sm" | "md" | "lg";
}

export function TabList({
  className,
  items,
  selectedKey,
  onSelectionChange,
  type = "underline",
  size = "md",
  ...props
}: TabListProps) {
  const [internalSelectedKey, setInternalSelectedKey] = React.useState(
    items[0]?.id,
  );
  const activeKey = selectedKey || internalSelectedKey;

  const handleSelect = (key: string) => {
    setInternalSelectedKey(key);
    onSelectionChange?.(key);
  };

  return (
    <div
      className={cn("flex space-x-1 rounded-xl bg-muted p-1", className)}
      {...props}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleSelect(item.id)}
          className={cn(
            "w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all text-muted-foreground",
            "ring-ring ring-offset-2 ring-offset-background focus:outline-none focus:ring-2",
            activeKey === item.id
              ? "bg-background text-foreground shadow"
              : "text-muted-foreground hover:bg-background/50 hover:text-foreground",
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
