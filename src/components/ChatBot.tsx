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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleEmailSupport = () => {
    window.location.href = "mailto:automation@getsagan.com";
  };

  const handleBack = () => {
    setSelectedOption(null);
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
            {!selectedOption ? (
              <>
                <Button
                  variant="outline"
                  className="justify-start text-left h-auto py-4"
                  onClick={() => setSelectedOption("how-it-works")}
                >
                  <div>
                    <div className="font-semibold">How does this work?</div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  className="justify-start text-left h-auto py-4"
                  onClick={() => setSelectedOption("help-choose")}
                >
                  <div>
                    <div className="font-semibold">Can you help me choose?</div>
                  </div>
                </Button>
                
                <Button
                  variant="outline"
                  className="justify-start text-left h-auto py-4"
                  onClick={() => setSelectedOption("email-support")}
                >
                  <div>
                    <div className="font-semibold">Email support</div>
                  </div>
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                {selectedOption === "how-it-works" && (
                  <div className="text-sm">
                    You can select individual automations or use our "Filter by Tools" to find automations that may be most helpful to you with your existing tech stack.
                  </div>
                )}
                
                {selectedOption === "help-choose" && (
                  <div className="space-y-4">
                    <div className="text-sm">
                      Use our pathfinder tool to find the perfect automation for your needs.
                    </div>
                    <Button 
                      onClick={() => {
                        window.open("https://saganpathfinder.replit.app/", "_blank");
                        setIsOpen(false);
                      }}
                    >
                      Open Pathfinder Tool
                    </Button>
                  </div>
                )}
                
                {selectedOption === "email-support" && (
                  <div className="space-y-4">
                    <div className="text-sm">
                      Get in touch with our support team via email.
                    </div>
                    <Button onClick={handleEmailSupport}>
                      Send Email
                    </Button>
                  </div>
                )}
                
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="w-full"
                >
                  Back to options
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatBot;