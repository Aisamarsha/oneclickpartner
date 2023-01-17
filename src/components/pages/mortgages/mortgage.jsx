import { useEffect } from "react";

const Mortgage = () => {
  useEffect(() => {
    window.location = "mortgage/first-time-buyer";
  }, []);
  return null;
};

export default Mortgage;
