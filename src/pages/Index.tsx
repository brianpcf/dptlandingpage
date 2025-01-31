import Hero from "@/components/Hero";
import AutomationCard from "@/components/AutomationCard";
import FeaturedAutomations from "@/components/FeaturedAutomations";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toolCategories } from "@/data/toolCategories";
import { useState } from "react";
import { automations } from "@/data/automations";

const Index = () => {
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

  const filteredAutomations = automations.filter((automation) => {
    if (selectedTools.length === 0) return true;
    return automation.tools.some(tool => selectedTools.includes(tool));
  });

  const featuredAutomations = automations.slice(0, 3);
  const remainingAutomations = filteredAutomations.slice(3);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Hero />
      <div className="max-w-7xl mx-auto">
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
    </div>
  );
};

export default Index;