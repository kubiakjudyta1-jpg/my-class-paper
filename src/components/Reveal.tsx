import { ReactNode, HTMLAttributes } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article";
}

export const Reveal = ({ children, delay = 0, className, as = "div", ...rest }: RevealProps) => {
  const { ref, isVisible } = useScrollReveal();
  const Tag = as as any;

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};
