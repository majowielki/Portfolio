import { useEffect, useState } from "react";

export const useLocalTime = (timeZone: string) => {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(timeZone)), 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
};

const formatTime = (timeZone: string) =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone, timeZoneName: "short" }).format(
    new Date()
  );
