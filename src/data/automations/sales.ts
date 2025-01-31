import { Users, Calendar, Bell, FileText, Clock } from "lucide-react";
import { Automation } from "./types";

export const salesAutomations: Automation[] = [
  {
    title: "Smart Lead Qualification",
    description: "AI-powered lead scoring and routing system that analyzes incoming leads and assigns them to the right sales rep",
    icon: Users,
    iconBg: "bg-emerald-100",
    link: "/smart-lead-qualification",
    category: "Sales",
    tools: ["Gmail", "Claude.ai", "HubSpot", "Slack"]
  },
  {
    title: "Automated Sales Meeting Follow-up",
    description: "Transcribes sales calls, generates summaries, updates CRM, and schedules follow-ups automatically",
    icon: Calendar,
    iconBg: "bg-violet-100",
    link: "/sales-meeting-followup",
    category: "Sales",
    tools: ["Fireflies.ai", "HubSpot", "Gmail", "Google Calendar"]
  },
  {
    title: "Pipeline Progress Notifications",
    description: "Alerts teams in Slack when deals move stages, with AI-generated next step recommendations",
    icon: Bell,
    iconBg: "bg-cyan-100",
    link: "/pipeline-progress",
    category: "Sales",
    tools: ["HubSpot", "Slack", "Claude.ai"]
  },
  {
    title: "Intelligent Quote Generator",
    description: "Creates customized quotes based on CRM data and sends for internal approval before client delivery",
    icon: FileText,
    iconBg: "bg-indigo-100",
    link: "/quote-generator",
    category: "Sales",
    tools: ["HubSpot", "Slack", "Gmail", "Claude.ai"]
  },
  {
    title: "Lead Response Accelerator",
    description: "Instant personalized responses to form submissions with intelligent follow-up scheduling",
    icon: Clock,
    iconBg: "bg-rose-100",
    link: "/lead-response",
    category: "Sales",
    tools: ["Typeform", "Gmail", "Calendly", "ChatGPT"]
  }
];