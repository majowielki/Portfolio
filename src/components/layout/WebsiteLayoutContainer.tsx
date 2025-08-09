import React from "react";

const WebsiteLayoutContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-center mx-auto 2xl:max-w-screen-2xl 2xl:mx-auto">
      {children}
    </div>
  );
};

export default WebsiteLayoutContainer;