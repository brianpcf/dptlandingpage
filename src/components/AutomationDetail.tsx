import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { automations } from "@/data/automations";
import { Card } from "./ui/card";
import { 
  Mail, FileText, MessageSquare, Terminal, Calendar, 
  Users, AlertCircle, DollarSign, PhoneCall, Database,
  List, BrainCircuit, Bot, Workflow
} from "lucide-react";

const workflowSteps = {
  "email-triage": [
    {
      title: "Email Reception",
      description: "New customer email arrives in Gmail inbox",
      icon: Mail
    },
    {
      title: "AI Analysis",
      description: "AI analyzes email content and sentiment to determine priority",
      icon: BrainCircuit
    },
    {
      title: "Route & Notify",
      description: "Email is routed to appropriate Slack channel and CRM is updated",
      icon: MessageSquare
    }
  ],
  "meeting-followup": [
    {
      title: "Meeting Ends",
      description: "Calendar event concludes",
      icon: Calendar
    },
    {
      title: "Generate Summary",
      description: "AI creates detailed meeting summary and action items",
      icon: FileText
    },
    {
      title: "Update Systems",
      description: "CRM is updated and follow-up emails are drafted",
      icon: Database
    }
  ],
  "lead-qualification": [
    {
      title: "Lead Entry",
      description: "New lead information is received",
      icon: Users
    },
    {
      title: "AI Scoring",
      description: "AI analyzes lead data against qualification criteria",
      icon: BrainCircuit
    },
    {
      title: "Team Assignment",
      description: "Qualified leads are assigned to sales team with notifications",
      icon: MessageSquare
    }
  ],
  "support-escalation": [
    {
      title: "Issue Detection",
      description: "Support ticket is flagged for escalation",
      icon: AlertCircle
    },
    {
      title: "Analysis",
      description: "AI analyzes issue severity and required expertise",
      icon: BrainCircuit
    },
    {
      title: "Route & Resolve",
      description: "Issue is routed to appropriate team with context",
      icon: MessageSquare
    }
  ],
  "quote-automation": [
    {
      title: "Request Receipt",
      description: "Quote request received from customer",
      icon: FileText
    },
    {
      title: "Data Collection",
      description: "System gathers necessary pricing and product information",
      icon: Database
    },
    {
      title: "Generate & Send",
      description: "Personalized quote is created and sent to customer",
      icon: DollarSign
    }
  ],
  "call-coach": [
    {
      title: "Call Recording",
      description: "Customer call is recorded and transcribed",
      icon: PhoneCall
    },
    {
      title: "AI Analysis",
      description: "AI analyzes call against performance metrics",
      icon: BrainCircuit
    },
    {
      title: "Report Generation",
      description: "Detailed performance report is generated and shared",
      icon: FileText
    }
  ],
  "road-recap": [
    {
      title: "Voice Input",
      description: "Sales rep calls in with updates",
      icon: PhoneCall
    },
    {
      title: "AI Processing",
      description: "AI ChatBot processes conversation and extracts key information",
      icon: Bot
    },
    {
      title: "CRM Update",
      description: "Information is structured and added to CRM",
      icon: Database
    }
  ],
  "agenda-ai": [
    {
      title: "Query Receipt",
      description: "User asks question to AI ChatBot",
      icon: MessageSquare
    },
    {
      title: "Context Gathering",
      description: "AI accesses connected systems for relevant information",
      icon: Database
    },
    {
      title: "Response Generation",
      description: "Contextual answer is generated and delivered",
      icon: Bot
    }
  ]
};

const AutomationDetail = () => {
  const { id } = useParams();
  const automation = automations.find(a => a.link.replace("/", "") === id);
  
  if (!automation) {
    return <div>Automation not found</div>;
  }

  const steps = workflowSteps[id as keyof typeof workflowSteps] || [
    {
      title: "Trigger",
      description: "Automation is triggered by specific event",
      icon: Workflow
    },
    {
      title: "Process",
      description: "System processes the incoming data",
      icon: Terminal
    },
    {
      title: "Output",
      description: "Results are delivered to specified channels",
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Automations
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{automation.title}</h1>
          <p className="text-lg text-muted-foreground">{automation.description}</p>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Steps in this workflow</h2>
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4 relative">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200" />
                  )}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex min-h-[48px] flex-grow">
                    <div className="flex flex-col justify-center w-full">
                      <h3 className="font-medium text-lg leading-6">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Integration Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Required Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {automation.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Category</h3>
              <p className="text-muted-foreground">{automation.category}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AutomationDetail;