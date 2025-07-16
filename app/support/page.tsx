"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Support() {
  const router = useRouter();

  const handleMessageUs = () => {
    router.push("/support/chat");
  };

  const handleScheduleCallback = () => {
    router.push("/support/call");
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center text-center">
        <div>
          <h1 className="text-sm text-gray-600">Support</h1>
          <h1 className="text-3xl font-bold">How can we help?</h1>
        </div>
        <div className="mt-10 w-[500px]">
          <Textarea placeholder="Search questions, keywords, or topics" />

          <Button
            variant="secondary"
            onClick={handleMessageUs}
            className="mt-4 w-[90%] h-15 border-2 border-black border-thin rounded-md transition-colors cursor-pointer hover:bg-gray-200"
          >
            Message Us
          </Button>
          <Button
            variant="secondary"
            onClick={handleScheduleCallback}
            className="mt-4 w-[90%] h-15 border-2 border-black border-thin rounded-md transition-colors cursor-pointer hover:bg-gray-200"
          >
            Schedule a Callback
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Support;
