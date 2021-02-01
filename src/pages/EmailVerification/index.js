import React from "react";
import { useLocation } from "react-router-dom";
import SentVerification from "./SentVerification";
import LinkExpired from "./LinkExpired";
import PsychiatristRegistration from "./PsychiatristRegistration";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const EmailVerification = () => {
  const query = useQuery();
  const type = query.get("type");
  const token = query.get("token");

  switch (type) {
    case "sent":
      return <SentVerification />;
    case "expired":
      return <LinkExpired token={token} />;
    case "psychiatrist-registration":
      return <PsychiatristRegistration />;

    default:
      return <h1>404 Not Found</h1>;
  }
};

export default EmailVerification;
