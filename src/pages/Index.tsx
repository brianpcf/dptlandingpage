import Hero from "@/components/Hero";
import AutomationCard from "@/components/AutomationCard";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toolCategories } from "@/data/toolCategories";
import { useState } from "react";
import { automations } from "@/data/automations";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTool, setSelectedTool] = useState<string>("");

  const filteredAutomations = automations.filter((automation) => {
    if (!selectedTool && !selectedCategory) return true;
    if (selectedTool && automation.tools.includes(selectedTool)) return true;
    if (selectedCategory && !selectedTool) {
      const categoryTools = toolCategories
        .find((cat) => cat.name === selectedCategory)
        ?.tools.map((t) => t.name) || [];
      return automation.tools.some((tool) => categoryTools.includes(tool));
    }
    return false;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Hero />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 space-y-4">
          <Select onValueChange={setSelectedCategory} value={selectedCategory}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select tools category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tool Categories</SelectLabel>
                {toolCategories.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {selectedCategory && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Available Tools:</h3>
              <div className="flex flex-wrap gap-2">
                {toolCategories
                  .find((cat) => cat.name === selectedCategory)
                  ?.tools.map((tool) => (
                    <button
                      key={tool.name}
                      onClick={() => setSelectedTool(selectedTool === tool.name ? "" : tool.name)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedTool === tool.name
                          ? "bg-primary text-primary-foreground"
                          : tool.isPriority
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {tool.name}
                      {tool.isPriority && " *"}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAutomations.map((automation, index) => (
            <AutomationCard key={index} {...automation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
