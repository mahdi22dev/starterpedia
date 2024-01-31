import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function LoadingModal({ isLoading }: { isLoading: boolean }): JSX.Element {
  return (
    <div className="bg-primary/20 fixed top-0 bottom-0 left-0 right-0">
      <ClipLoader
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        loading={isLoading}
        color="#fff"
      />
    </div>
  );
}

export default LoadingModal;
