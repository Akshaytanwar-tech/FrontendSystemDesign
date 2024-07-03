import React, { useState } from "react";
import Toast from "./Toast";

const ToastContainer = () => {
  const color = {
    Warning: "orange",
    Info: "blue",
    Success: "green",
    Error: "red",
  };

  const [stack, setStack] = useState([]);

  const HandleToast = (e) => {
    const name = e.target.name;
    const message = e.target.value;
    
    setStack([
      ...stack,
      {
        color: color[name],
        message: message,
        isToast: true,
        timeOut: function () {
          setTimeout(() => {
            setisToast(false);
          }, 5000);
        },
      },
    ]);

  };
  return (
    <>
      <div className="toast-container">
        <button
          name="Warning"
          className="toast-container-item"
          onClick={HandleToast}
          value="This is warning toast"
        >
          Show warning
        </button>
        <button
          name="Success"
          className="toast-container-item"
          onClick={HandleToast}
          value="This is success toast"
        >
          Show success
        </button>
        <button
          name="Info"
          className="toast-container-item"
          onClick={HandleToast}
          value="This is the Info toast"
        >
          Show Info
        </button>
        <button
          name="Error"
          className="toast-container-item"
          onClick={HandleToast}
          value="This is the error toast"
        >
          Show Error
        </button>
      </div>
      {<Toast toast={stack} />}
    </>
  );
};

export default ToastContainer;
