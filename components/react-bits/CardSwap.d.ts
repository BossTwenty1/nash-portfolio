import type { ForwardRefExoticComponent, HTMLAttributes, ReactNode, RefAttributes } from "react";

export type CardSwapHandle = { next(): void; prev(): void };
export const Card: ForwardRefExoticComponent<
  HTMLAttributes<HTMLDivElement> & { customClass?: string } & RefAttributes<HTMLDivElement>
>;
declare const CardSwap: ForwardRefExoticComponent<{
  children: ReactNode;
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  depth?: number;
  visibleCards?: number;
  delay?: number;
  speed?: number;
  bounce?: number;
  autoplay?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  parallax?: number;
  hoverSpread?: number;
  skewAmount?: number;
  cardRadius?: number;
  intro?: boolean;
  className?: string;
  onChange?: (index: number) => void;
} & RefAttributes<CardSwapHandle>>;
export default CardSwap;
