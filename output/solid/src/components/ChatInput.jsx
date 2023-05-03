import { createSignal } from "solid-js";

import { css } from "solid-styled-components";

function ChatInput(props) {
  const [inputField, setInputField] = createSignal("");

  const [timeoutVar, setTimeoutVar] = createSignal(null);

  function sendMessage(e) {
    e.preventDefault();
    if (props.handleSend) props.handleSend(inputField());
    dismissTyping(null);
    setInputField("");
  }

  function indicateMessage(e) {
    setInputField(e.target.value);
    if (props.handleTyping) props.handleTyping(true);
    if (timeoutVar()) {
      clearTimeout(timeoutVar());
    }
    setTimeoutVar(
      setTimeout(() => {
        dismissTyping(null);
      }, 3000)
    );
  }

  function dismissTyping(e) {
    if (props.handleTyping) props.handleTyping(false);
  }

  return (
    <form
      onSubmit={(event) => sendMessage(event)}
      style={{
        display: "flex",
        height: props.inputHeight || "60px",
        "background-color": props.bgColorInput || "white",
        color: props.textColorInput || "black",
      }}
    >
      <input
        class={css({
          "&:focus": {
            outline: "none",
          },
        })}
        onInput={(event) => indicateMessage(event)}
        placeholder={props.inputPlaceholder || "Type your message here"}
        value={inputField()}
        style={{
          "border-width": "0px",
          "background-color": props.bgColorInput || "white",
          color: props.textColorInput || "black",
          width: "100%",
          "margin-left": "1rem",
          "font-size": "1rem",
        }}
      />
      <button
        style={{
          "background-color": props.bgColorInput || "white",
          "flex-shrink": "0",
          all: "unset",
          cursor: "pointer",
          margin: "auto 1rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          style={{
            height: "1.5rem",
            width: "1.5rkm",
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          ></path>
        </svg>
      </button>
    </form>
  );
}

export default ChatInput;
