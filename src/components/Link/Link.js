import React from "react";

export default function Link({ url, title }) {
  return (
    <a
      className="App-Link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}
