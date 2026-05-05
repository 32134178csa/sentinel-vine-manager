import React from 'react';

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
}

export default function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <div className="browser-frame">
      <div className="browser-frame__chrome">
        <div className="browser-frame__lights"><i /><i /><i /></div>
        <div className="browser-frame__addr">
          <span>app.sentinelvine.com</span>/{url}
        </div>
      </div>
      <div className="browser-frame__body">
        {children}
      </div>
    </div>
  );
}
