import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { automations } from "@/data/automations";
import { Card } from "./ui/card";

const AutomationDetail = () => {
  const { id } = useParams();
  const automation = automations.find(a => a.link.replace("/", "") === id);

  if (!automation) {
    return <div>Automation not found</div>;
  }

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
          <h2 className="text-xl font-semibold mb-4">Steps in this workflow</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-medium">Trigger</h3>
                <p className="text-sm text-muted-foreground">
                  Every time a new customer call is recorded
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="font-medium">Process</h3>
                <p className="text-sm text-muted-foreground">
                  AI analyzes call transcript and extracts key insights
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-medium">Output</h3>
                <p className="text-sm text-muted-foreground">
                  Generates structured report and sends to specified channels
                </p>
              </div>
            </div>
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