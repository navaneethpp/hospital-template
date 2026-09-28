import {
  HeartPulse,
  Baby,
  Ambulance,
  Brain,
  Bone,
  Ribbon,
  Venus,
  Sparkles,
  ShieldAlert,
  HeartHandshake,
  Microscope,
  ShieldPlus,
  LucideProps,
} from "lucide-react";

const iconMap = {
  HeartPulse,
  Baby,
  Ambulance,
  Brain,
  Bone,
  Ribbon,
  Venus,
  Sparkles,
  ShieldAlert,
  HeartHandshake,
  Microscope,
  ShieldPlus,
};

export default function DepartmentIcon({
  name,
  className = "h-7 w-7",
  ...props
}: {
  name: string;
  className?: string;
} & LucideProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap] || HeartPulse;
  return <IconComponent className={className} {...props} />;
}
