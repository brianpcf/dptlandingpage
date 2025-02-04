import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface AutomationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  link: string;
  tools?: string[];
  category?: string;
}

const AutomationCard = ({ 
  title, 
  description, 
  icon: Icon, 
  iconBg, 
  link,
  tools = [],
  category 
}: AutomationCardProps) => {
  return (
    <Card className="automation-card hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        <Link 
          to={link.replace("/", "")} 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default AutomationCard;