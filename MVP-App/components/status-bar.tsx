"use client";

import { useEffect, useState } from "react";
import { Database, Globe, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ConnectionStatus = "connected" | "disconnected" | "checking" | "reconnecting";

export function StatusBar() {
  const [dbStatus, setDbStatus] = useState<ConnectionStatus>("checking");
  const [serverInfo, setServerInfo] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const checkDatabase = async () => {
    try {
      setDbStatus("checking");
      const response = await fetch('/api/health');
      const data = await response.json();
      
      if (response.ok) {
        setDbStatus("connected");
        setErrorMessage("");
      } else {
        setDbStatus("disconnected");
        setErrorMessage(data.error || "Connection failed");
      }
    } catch (error) {
      setDbStatus("disconnected");
      setErrorMessage("Network error");
    }
  };

  const handleReconnect = async () => {
    setDbStatus("reconnecting");
    await checkDatabase();
  };

  useEffect(() => {
    setServerInfo(window.location.origin);
    checkDatabase();
    const interval = setInterval(checkDatabase, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-muted/30 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Database className="h-3 w-3" />
              <span className="font-medium">Database:</span>
              <span className={cn(
                "flex items-center gap-2",
                dbStatus === "connected" ? "text-green-500" : 
                dbStatus === "disconnected" ? "text-red-500" : 
                "text-yellow-500"
              )}>
                {dbStatus === "connected" ? "Connected" :
                 dbStatus === "reconnecting" ? "Reconnecting..." :
                 dbStatus === "disconnected" ? "Disconnected" :
                 "Checking..."}
                {dbStatus === "disconnected" && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={handleReconnect}
                          disabled={dbStatus === "reconnecting"}
                        >
                          <RefreshCw className={cn(
                            "h-3 w-3",
                            dbStatus === "reconnecting" && "animate-spin"
                          )} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Retry connection</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </span>
              {errorMessage && (
                <span className="text-red-500 ml-2">({errorMessage})</span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-3 w-3" />
              <span className="font-medium">Server:</span>
              <span className="text-muted-foreground">{serverInfo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}