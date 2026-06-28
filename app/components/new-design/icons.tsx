import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  SourceCodeIcon,
  CloudIcon as HugeCloudIcon,
  Package01Icon,
  Layers01Icon,
  AiBrain01Icon,
  FlashIcon,
  SecurityCheckIcon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  ComputerTerminal01Icon,
} from "@hugeicons/core-free-icons";

/* Thin wrappers over HugeIcons (free set). Each keeps the original export
   name so consuming components don't change. `className` controls size +
   colour (currentColor) exactly like the previous inline SVGs. */
type IconType = React.ComponentProps<typeof HugeiconsIcon>["icon"];
type IconProps = { className?: string; strokeWidth?: number };

const make = (icon: IconType) =>
  function Icon({ className, strokeWidth = 1.6 }: IconProps) {
    return (
      <HugeiconsIcon icon={icon} className={className} strokeWidth={strokeWidth} />
    );
  };

export const ClockIcon = make(Clock01Icon);
export const CodeIcon = make(SourceCodeIcon);
export const CloudIcon = make(HugeCloudIcon);
export const BoxIcon = make(Package01Icon);
export const LayersIcon = make(Layers01Icon);
export const CpuIcon = make(AiBrain01Icon);
export const ZapIcon = make(FlashIcon);
export const ShieldIcon = make(SecurityCheckIcon);
export const ArrowRightIcon = make(ArrowRight01Icon);
export const ArrowUpRightIcon = make(ArrowUpRight01Icon);
export const TerminalIcon = make(ComputerTerminal01Icon);
