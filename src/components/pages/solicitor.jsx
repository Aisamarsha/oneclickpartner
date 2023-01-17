import { useEffect } from "react";

const Solicitor = () => {
  useEffect(() => {
    window.location = "https://quote.sortrefer.co.uk/MTEyMTU=";
  }, []);
  return (
    <div className="min-h-screen text-2xl text-violet-700 mt-4 p-4">
      Redirecting to "https://quote.sortrefer.co.uk/MTEyMTU="
    </div>
  );
};

export default Solicitor;
