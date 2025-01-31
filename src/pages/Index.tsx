import { Mail, Calendar, Users, MessageSquare, FileText } from "lucide-react";
import Hero from "@/components/Hero";
import AutomationCard from "@/components/AutomationCard";

const automations = [
  {
    title: "Email Response Triage",
    description: "Automatically analyze and route important customer emails to Slack and your CRM with AI-powered prioritization.",
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-100",
    link: "/email-triage"
  },
  {
    title: "Meeting Follow-up Chain",
    description: "Generate AI meeting summaries, create CRM tasks, and draft follow-up emails automatically after calendar events.",
    icon: <Calendar className="w-6 h-6 text-purple-600" />,
    iconBg: "bg-purple-100",
    link: "/meeting-followup"
  },
  {
    title: "Lead Qualification Pipeline",
    description: "AI-powered lead analysis and qualification with instant Slack notifications and CRM integration.",
    icon: <Users className="w-6 h-6 text-green-600" />,
    iconBg: "bg-green-100",
    link: "/lead-qualification"
  },
  {
    title: "Customer Support Escalation",
    description: "Intelligent support issue analysis and resolution suggestions with automatic CRM updates.",
    icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
    iconBg: "bg-orange-100",
    link: "/support-escalation"
  },
  {
    title: "Quote/Proposal Automation",
    description: "Automatically generate and send personalized quotes with AI, integrated with your CRM and email.",
    icon: <FileText className="w-6 h-6 text-teal-600" />,
    iconBg: "bg-teal-100",
    link: "/quote-automation"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Hero />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((automation, index) => (
            <AutomationCard key={index} {...automation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;