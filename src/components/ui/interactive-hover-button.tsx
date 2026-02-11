

import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold transition-colors duration-300",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-primary h-2 w-2 rounded-full opacity-0 transition-transform duration-300 group-hover:scale-[150] group-hover:opacity-100" />
      </div>
      <div className="relative z-10 flex items-center justify-center gap-2 group-hover:text-primary-foreground">
        {children}
      </div>
    </button>
  )
}
