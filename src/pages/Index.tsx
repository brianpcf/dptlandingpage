import Hero from "@/components/Hero";
import AutomationCard from "@/components/AutomationCard";
import FeaturedAutomations from "@/components/FeaturedAutomations";
import { useState } from "react";
import { automations } from "@/data/automations";
import ChatBot from "@/components/ChatBot";
import ToolsFilterSidebar from "@/components/ToolsFilterSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

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
  const remainingAutomations = selectedTools.length > 0 
    ? filteredAutomations.filter(automation => !featuredAutomations.includes(automation))
    : filteredAutomations.slice(3);

  console.log('Selected Tools:', selectedTools);
  console.log('Filtered Automations:', filteredAutomations);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <ToolsFilterSidebar
          selectedTools={selectedTools}
          onToolToggle={toggleTool}
          expandedCategories={expandedCategories}
          onCategoryToggle={toggleCategory}
        />
        <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
          <Hero />
          <div className="max-w-7xl mx-auto">
            <FeaturedAutomations automations={featuredAutomations} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingAutomations.map((automation, index) => (
                <AutomationCard key={index} {...automation} />
              ))}
            </div>
          </div>
          <ChatBot />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;