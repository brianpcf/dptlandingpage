
import Hero from "@/components/Hero";
import AutomationCard from "@/components/AutomationCard";
import FeaturedAutomations from "@/components/FeaturedAutomations";
import { Checkbox } from "@/components/ui/checkbox";
import { toolCategories } from "@/data/toolCategories";
import { useState } from "react";
import { automations } from "@/data/automations";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTool = (toolName: string) => {
    setSelectedTools(prev => 
      prev.includes(toolName)
        ? prev.filter(tool => tool !== toolName)
        : [...prev, toolName]
    );
  };

  // Updated filtering logic
  const filteredAutomations = automations.filter((automation) => {
    if (selectedTools.length === 0) return true;
    return automation.tools.some(tool => selectedTools.includes(tool));
  });

  const featuredAutomations = automations.slice(0, 3);
  const remainingAutomations = selectedTools.length > 0 
    ? filteredAutomations.filter(automation => !featuredAutomations.includes(automation))
    : filteredAutomations.slice(3);

  const handleDownload = () => {
    try {
      // Create data object with all relevant information
      const data = {
        toolCategories,
        automations,
        featuredAutomations,
        timestamp: new Date().toISOString()
      };

      // Convert to JSON string
      const jsonString = JSON.stringify(data, null, 2);

      // Create blob and download
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'automations-data.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Success",
        description: "Data downloaded successfully",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download data",
        variant: "destructive",
        duration: 3000,
      });
      console.error('Download error:', error);
    }
  };

  console.log('Selected Tools:', selectedTools);
  console.log('Filtered Automations:', filteredAutomations);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Hero />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Automations</h2>
          <Button
            onClick={handleDownload}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Data
          </Button>
        </div>
        
        <FeaturedAutomations automations={featuredAutomations} />
        
        <div className="mb-8 space-y-4">
          <h3 className="text-lg font-semibold mb-4">Filter by Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolCategories.map((category) => (
              <div 
                key={category.name}
                className="border rounded-lg p-4"
              >
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                >
                  <span>{category.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {expandedCategories.includes(category.name) ? '▼' : '▶'}
                  </span>
                </button>
                
                {expandedCategories.includes(category.name) && (
                  <div className="space-y-2 ml-2">
                    {category.tools.map((tool) => (
                      <div key={tool.name} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${category.name}-${tool.name}`}
                          checked={selectedTools.includes(tool.name)}
                          onCheckedChange={() => toggleTool(tool.name)}
                        />
                        <label
                          htmlFor={`${category.name}-${tool.name}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {tool.name}
                          {tool.isPriority && " *"}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingAutomations.map((automation, index) => (
            <AutomationCard key={index} {...automation} />
          ))}
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default Index;

