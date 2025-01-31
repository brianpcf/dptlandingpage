import { Mail, Calendar, Users, MessageSquare, FileText, PhoneCall, Database, List } from "lucide-react";
import { ReactNode } from "react";

export interface Tool {
  name: string;
  isPriority: boolean;
}

export interface ToolCategory {
  name: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    name: "Communication & Collaboration",
    tools: [
      { name: "Gmail/Google Workspace", isPriority: true },
      { name: "Slack", isPriority: true },
      { name: "Microsoft Teams", isPriority: false },
      { name: "Zoom", isPriority: false },
      { name: "Microsoft 365/Outlook", isPriority: true }
    ]
  },
  {
    name: "CRM & Sales",
    tools: [
      { name: "HubSpot", isPriority: true },
      { name: "Pipedrive", isPriority: true },
      { name: "Zoho CRM", isPriority: false },
      { name: "Monday.com", isPriority: true },
      { name: "ClickUp", isPriority: true }
    ]
  },
  {
    name: "Project Management",
    tools: [
      { name: "Asana", isPriority: true },
      { name: "Trello", isPriority: false },
      { name: "ClickUp", isPriority: true },
      { name: "Monday.com", isPriority: true },
      { name: "Notion", isPriority: false }
    ]
  },
  {
    name: "Forms & Data Collection",
    tools: [
      { name: "Google Forms", isPriority: true },
      { name: "Typeform", isPriority: false },
      { name: "JotForm", isPriority: false },
      { name: "Airtable", isPriority: true },
      { name: "Microsoft Forms", isPriority: false }
    ]
  },
  {
    name: "Document Management",
    tools: [
      { name: "Google Drive", isPriority: true },
      { name: "Dropbox", isPriority: false },
      { name: "OneDrive", isPriority: false },
      { name: "Box", isPriority: false }
    ]
  },
  {
    name: "Accounting & Financial",
    tools: [
      { name: "QuickBooks Online", isPriority: true },
      { name: "Xero", isPriority: true },
      { name: "FreshBooks", isPriority: false },
      { name: "Stripe", isPriority: true },
      { name: "Square", isPriority: false }
    ]
  },
  {
    name: "Marketing & Social",
    tools: [
      { name: "Mailchimp", isPriority: true },
      { name: "ActiveCampaign", isPriority: false },
      { name: "LinkedIn", isPriority: false },
      { name: "Facebook/Instagram", isPriority: true },
      { name: "Twitter", isPriority: false },
      { name: "Klaviyo", isPriority: false }
    ]
  },
  {
    name: "E-commerce",
    tools: [
      { name: "Shopify", isPriority: true },
      { name: "WooCommerce", isPriority: true },
      { name: "BigCommerce", isPriority: false },
      { name: "Square", isPriority: false }
    ]
  },
  {
    name: "Support & Service",
    tools: [
      { name: "Zendesk", isPriority: true },
      { name: "Intercom", isPriority: true },
      { name: "Help Scout", isPriority: false },
      { name: "Freshdesk", isPriority: false }
    ]
  },
  {
    name: "Scheduling",
    tools: [
      { name: "Calendly", isPriority: true },
      { name: "Google Calendar", isPriority: true },
      { name: "Microsoft Booking", isPriority: false }
    ]
  },
  {
    name: "File Storage & Signing",
    tools: [
      { name: "DocuSign", isPriority: true },
      { name: "Google Drive", isPriority: true },
      { name: "Dropbox", isPriority: false },
      { name: "Box", isPriority: false }
    ]
  },
  {
    name: "Meeting Intelligence & Transcription",
    tools: [
      { name: "Fireflies.ai", isPriority: true },
      { name: "Otter.ai", isPriority: false },
      { name: "Gong.io", isPriority: false },
      { name: "Rev.ai", isPriority: false }
    ]
  }
];

export interface Automation {
  title: string;
  description: string;
  icon: ReactNode;
  iconBg: string;
  link: string;
  category: string;
  tools: string[];
}

export const automations: Automation[] = [
  {
    title: "Email Response Triage",
    description: "Automatically analyze and route important customer emails to Slack and your CRM with AI-powered prioritization.",
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-100",
    link: "/email-triage",
    category: "Communication",
    tools: ["Gmail", "Slack", "HubSpot"]
  },
  {
    title: "Meeting Follow-up Chain",
    description: "Generate AI meeting summaries, create CRM tasks, and draft follow-up emails automatically after calendar events.",
    icon: <Calendar className="w-6 h-6 text-purple-600" />,
    iconBg: "bg-purple-100",
    link: "/meeting-followup",
    category: "Communication",
    tools: ["Gmail", "Google Calendar", "HubSpot"]
  },
  {
    title: "Lead Qualification Pipeline",
    description: "AI-powered lead analysis and qualification with instant Slack notifications and CRM integration.",
    icon: <Users className="w-6 h-6 text-green-600" />,
    iconBg: "bg-green-100",
    link: "/lead-qualification",
    category: "Sales",
    tools: ["Gmail", "HubSpot", "Slack"]
  },
  {
    title: "Customer Support Escalation",
    description: "Intelligent support issue analysis and resolution suggestions with automatic CRM updates.",
    icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
    iconBg: "bg-orange-100",
    link: "/support-escalation",
    category: "Support",
    tools: ["Zendesk", "Slack", "HubSpot"]
  },
  {
    title: "Quote/Proposal Automation",
    description: "Automatically generate and send personalized quotes with AI, integrated with your CRM and email.",
    icon: <FileText className="w-6 h-6 text-teal-600" />,
    iconBg: "bg-teal-100",
    link: "/quote-automation",
    category: "Sales",
    tools: ["HubSpot", "Gmail", "Slack"]
  },
  {
    title: "Call Coach",
    description: "Use AI to set and collect performance metrics for sales and customer service calls.",
    icon: <PhoneCall className="w-6 h-6 text-indigo-600" />,
    iconBg: "bg-indigo-100",
    link: "/call-coach",
    category: "Sales",
    tools: ["Gong.io", "HubSpot", "Slack"]
  },
  {
    title: "Road Recap",
    description: "Your AI CRM. Set your questions, call in and talk to your custom AI ChatBot, and get a record for your CRM.",
    icon: <Database className="w-6 h-6 text-rose-600" />,
    iconBg: "bg-rose-100",
    link: "/road-recap",
    category: "Sales",
    tools: ["HubSpot", "Fireflies.ai", "Slack"]
  },
  {
    title: "Agenda AI",
    description: "An AI ChatBot that can answer questions about clients, internal processes, and connected systems.",
    icon: <List className="w-6 h-6 text-amber-600" />,
    iconBg: "bg-amber-100",
    link: "/agenda-ai",
    category: "Communication",
    tools: ["Slack", "HubSpot", "Notion"]
  }
];
