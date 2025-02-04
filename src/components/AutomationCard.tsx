import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Users,
  Database,
  Slack,
  BellRing,
  FileSpreadsheet,
  MessageCircle
} from "lucide-react";

interface AutomationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  link: string;
  tools?: string[];
  category?: string;
}

// Helper function to map tool names to icons
const getToolIcon = (toolName: string): LucideIcon => {
  const iconMap: { [key: string]: LucideIcon } = {
    "Gmail": Mail,
    "Slack": MessageSquare,
    "Google Calendar": Calendar,
    "HubSpot": Database,
    "Google Sheets": FileSpreadsheet,
    "Zendesk": MessageCircle,
    "Google Drive": FileText,
    "Fireflies.ai": BellRing,
    "Notion": FileText
  };

  return iconMap[toolName] || Database; // Default to Database icon if no match
};

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
            {tools.map((tool) => {
              const ToolIcon = getToolIcon(tool);
              return (
                <div
                  key={tool}
                  className="p-1.5 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  title={tool}
                >
                  <ToolIcon className="w-4 h-4 text-muted-foreground" />
                </div>
              );
            })}
          </div>
        )}
        <a 
          href={link} 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </CardContent>
    </Card>
  );
};

export default AutomationCard;