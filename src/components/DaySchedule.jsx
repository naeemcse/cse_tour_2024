import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import * as React from "react";

const DailySchedule = () => {
  return (
    <div className="py-16">
      <h1 className="text-3xl tracking-wider font-bold">Tour Timeline</h1>
      <div className="mt-6">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              28 February 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="w-36 h-28">
                <img src="start1.png" alt="" className="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2 }}
              className="flex items-center"
            >
              <p className="font-medium text-xl">Tour Start</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              29 February 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="w-36 !bg-blue-400/80" variant="outlined">
                <img src="enjoy.png" alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <ul>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>

                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="w-36 !bg-gray-200 !shadow">
                <img src="cultural.png" alt="" />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <ul>
                <li className="space-x-2">
                  <span className="text-xs text-gray-700">9:00AM</span>
                  <span className="">Breakfast</span>{" "}
                </li>
                <li className="space-x-2">
                  <span className="text-xs text-gray-700">9:00AM</span>
                  <span className="">Breakfast</span>{" "}
                </li>
                <li className="space-x-2">
                  <span className="text-xs text-gray-700">9:00AM</span>
                  <span className="">Breakfast</span>{" "}
                </li>
                <li className="space-x-2">
                  <span className="text-xs text-gray-700">9:00AM</span>
                  <span className="">Breakfast</span>{" "}
                </li>

                <li className="space-x-2">
                  <span className="text-xs text-gray-700">9:00AM</span>
                  <span className="">Breakfast</span>{" "}
                </li>
                <li className="space-x-2">
                  <span className="text-xs text-gray-700">9:00AM</span>
                  <span className="">Breakfast</span>{" "}
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              29 February 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="w-36 !bg-purple-100 !shadow !border" variant="">
                <img src="dinner.png" alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <ul>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>

                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
                <li className="space-x-2">
                  <span className="">Breakfast</span>{" "}
                  <span className="text-xs text-gray-700">9:00AM</span>
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              28 February 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot className="w-36 h-28 !bg-violet-200 !shadow">
                <img src="start.gif" alt="" className="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2 }}
              className="flex items-center"
            >
              <p className="font-medium text-xl">Back to Home</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default DailySchedule;
