import { useState } from "react";
import { toolCategories } from "@/data/toolCategories";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

interface ToolsFilterSidebarProps {
  selectedTools: string[];
  onToolToggle: (toolName: string) => void;
  expandedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

const ToolsFilterSidebar = ({
  selectedTools,
  onToolToggle,
  expandedCategories,
  onCategoryToggle,
}: ToolsFilterSidebarProps) => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h3 className="text-lg font-semibold">Filter by Tools</h3>
      </SidebarHeader>
      <SidebarContent>
        {toolCategories.map((category) => (
          <SidebarGroup key={category.name}>
            <SidebarGroupLabel
              className="cursor-pointer"
              onClick={() => onCategoryToggle(category.name)}
            >
              {category.name}
              <span className="text-sm text-muted-foreground ml-2">
                {expandedCategories.includes(category.name) ? "▼" : "▶"}
              </span>
            </SidebarGroupLabel>
            {expandedCategories.includes(category.name) && (
              <SidebarGroupContent className="space-y-2 ml-2">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center space-x-2 px-2 py-1">
                    <Checkbox
                      id={`${category.name}-${tool.name}`}
                      checked={selectedTools.includes(tool.name)}
                      onCheckedChange={() => onToolToggle(tool.name)}
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
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default ToolsFilterSidebar;