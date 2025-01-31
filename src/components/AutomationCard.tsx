import { ArrowRight } from "lucide-react";

interface AutomationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  link: string;
}

const AutomationCard = ({ title, description, icon, iconBg, link }: AutomationCardProps) => {
  return (
    <div className="automation-card">
      <div className={`automation-icon ${iconBg}`}>
        {icon}
      </div>
      <h3 className="automation-title">{title}</h3>
      <p className="automation-description">{description}</p>
      <a href={link} className="automation-link">
        Learn More <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default AutomationCard;