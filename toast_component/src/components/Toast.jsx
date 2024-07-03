import React, { useEffect } from "react";

const Toast = ({ toast }) => {
  useEffect(() => {}, [toast]);
  return (
    <>
      <div className="toast-container-float-outside">
        {toast.map((e, i) => {
          return (
            e.isToast && (
              <div
                className="toast-container-float"
                style={{ background: e.color, color: "white" }}
                key={i}
              >
                {e.message} &nbsp; <span style={{ cursor: "pointer" }}>×</span>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default Toast;
