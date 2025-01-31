import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailSupport = () => {
    window.location.href = "mailto:automation@getsagan.com";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="rounded-full p-4 h-14 w-14 flex items-center justify-center"
            variant="default"
          >
            <MessageSquare className="h-6 w-6" />
            <span className="sr-only">Need help?</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Need help?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <Button
              variant="outline"
              className="justify-start text-left h-auto py-4"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div>
                <div className="font-semibold">How does this work?</div>
                <div className="text-sm text-muted-foreground mt-1">
                  You can select an individual automation or use our "Filter by Tools" to find the automations that may be most helpful to you with your existing tech stack.
                </div>
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="justify-start text-left h-auto py-4"
              onClick={() => {
                window.open("https://saganpathfinder.replit.app/", "_blank");
                setIsOpen(false);
              }}
            >
              <div>
                <div className="font-semibold">Can you help me choose?</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Use our pathfinder tool to find the perfect automation for your needs.
                </div>
              </div>
            </Button>
            
            <Button
              variant="outline"
              className="justify-start text-left h-auto py-4"
              onClick={handleEmailSupport}
            >
              <div>
                <div className="font-semibold">Email support</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Get in touch with our support team via email.
                </div>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatBot;