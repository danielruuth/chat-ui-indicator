import { Show, For, on, createEffect, createSignal } from "solid-js";

import { css } from "solid-styled-components";

function ChatMessages(props) {
  const [chatElementAdded, setChatElementAdded] = createSignal(false);

  function selectOption(index) {
    if (props.handleSelectOption) props.handleSelectOption(index);
    console.log("Option selected");
  }

  function scrollToEnd(container) {
    const containerHeight = container.clientHeight;
    const contentHeight = container.scrollHeight;
    container.scrollTop = contentHeight - containerHeight;
  }

  function onUpdateFn_1() {
    const container = document.getElementById("chat-container");
    if (container) setChatElementAdded(true);
if (container) scrollToEnd(container);
  }
  createEffect(on(() => [props.chat.length], onUpdateFn_1));

  return (
    <div
      id="chat-container"
      style={{
        height: "100%",
        "overscroll-behavior-y": "contain",
        "overflow-y": "auto",
        "overflow-x": "hidden",
        "background-color": props.bgColorChat || "#EAEEF3",
        padding: "1.5rem",
      }}
    >
      <For each={props.chat}>
        {(chatMessage, _index) => {
          const index = _index();
          return (
            <div key={index}>
              <Show when={chatMessage.type == "person"}>
                <div
                  class={css({
                    position: "relative",
                    "&:hover div": {
                      display: "block",
                    },
                  })}
                >
                  <div
                    class={css({
                      position: "relative",
                      borderRadius: "0.75rem",
                      padding: "1rem",
                      width: "fit-content",
                      maxWidth: "80%",
                      marginBottom: "1rem",
                      marginLeft: "auto",
                    })}
                    style={{
                      "background-color":
                        props.bgColorMessagePerson || "#025CDB",
                      color: props.textColorMessagePerson || "white",
                    }}
                  >
                    <Show when={chatMessage.timestamp}>
                      <div
                        class={css({
                          position: "absolute",
                          width: "max-content",
                          display: "none",
                          bottom: "0px",
                          borderRadius: "0.25rem",
                          left: "0px",
                          transform: "translateX(-50%) translateY(50%)",
                          boxShadow: "rgba(0, 0, 0, 0.2) 0 0 2px",
                          padding: "0.25rem",
                          zIndex: "9999",
                        })}
                        style={{
                          "background-color":
                            props.bgColorMessageTimestamp || "white",
                          color: props.textColorMessageTimestamp || "black",
                        }}
                      >
                        {chatMessage.timestamp}
                      </div>
                    </Show>
                    {chatMessage.message}
                  </div>
                </div>
              </Show>
              <Show when={chatMessage.type == "chatbot"}>
                <div
                  class={css({
                    position: "relative",
                    "&:hover div": {
                      display: "block",
                    },
                  })}
                >
                  <div
                    class={css({
                      position: "relative",
                      borderRadius: "0.75rem",
                      padding: "1rem",
                      width: "fit-content",
                      maxWidth: "80%",
                      marginBottom: "1rem",
                      marginRight: "auto",
                    })}
                    style={{
                      "background-color":
                        props.bgColorMessageChatbot || "white",
                      color: props.textColorMessageChatbot || "black",
                    }}
                  >
                    <Show when={chatMessage.timestamp}>
                      <div
                        class={css({
                          position: "absolute",
                          width: "max-content",
                          display: "none",
                          bottom: "0px",
                          right: "0px",
                          borderRadius: "0.25rem",
                          transform: "translateX(50%) translateY(50%)",
                          boxShadow: "rgba(0, 0, 0, 0.2) 0 0 2px",
                          padding: "0.25rem",
                          zIndex: "9999",
                        })}
                        style={{
                          "background-color":
                            props.bgColorMessageTimestamp || "white",
                          color: props.textColorMessageTimestamp || "black",
                        }}
                      >
                        {chatMessage.timestamp}
                      </div>
                    </Show>
                    {chatMessage.message}
                  </div>
                </div>
                <Show when={chatMessage.options}>
                  <div
                    class={css({
                      display: "flex",
                      alignItems: "flex-start",
                      top: "-1.7rem",
                      left: "1rem",
                      position: "relative",
                    })}
                  >
                    <For each={chatMessage.options}>
                      {(option, _index) => {
                        const index = _index();
                        return (
                          <button
                            class={css({
                              position: "relative",
                              borderRadius: "0.5rem",
                              padding: "0.2rem 1rem 0.2rem 1rem",
                              marginBottom: "1rem",
                              marginRight: "0.5rem",
                              cursor: "pointer",
                            })}
                            style={{
                              "background-color":
                                props.bgColorMessagePerson || "#025CDB",
                              color: props.textColorMessagePerson || "white",
                            }}
                            onClick={(event) => selectOption(option)}
                          >
                            {option}
                          </button>
                        );
                      }}
                    </For>
                  </div>
                </Show>
              </Show>
            </div>
          );
        }}
      </For>
      <Show when={props.botTyping}>
        <div
          class={css({
            position: "relative",
            borderRadius: "0.75rem",
            padding: "1rem",
            width: "fit-content",
            maxWidth: "80%",
            marginBottom: "1rem",
            marginRight: "auto",
          })}
          style={{
            "background-color": props.bgColorMessageChatbot || "white",
            color: props.textColorMessageChatbot || "black",
          }}
        >
          <svg
            width="40px"
            height="24px"
            viewBox="0 0 40 24"
            preserveAspectRatio="xMidYMid"
          >
            <circle cx="5" cy="12" r="5" fill="#6a6a6a">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="12;5;12;12"
                keyTimes="0;0.255;0.51;1"
                dur="0.8474576271186441s"
                begin="-0.4322033898305085s"
              ></animate>
            </circle>
            <circle cx="20" cy="12" r="5" fill="#979797">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="12;5;12;12"
                keyTimes="0;0.255;0.51;1"
                dur="0.8474576271186441s"
                begin="-0.288135593220339s"
              ></animate>
            </circle>
            <circle cx="35" cy="12" r="5" fill="#bdbdbd">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="12;5;12;12"
                keyTimes="0;0.255;0.51;1"
                dur="0.8474576271186441s"
                begin="-0.1440677966101695s"
              ></animate>
            </circle>
          </svg>
        </div>
      </Show>
      <Show when={props.isTyping == "customer"}>
        <div
          class={
            "typing " +
            css({
              position: "relative",
              borderRadius: "0.75rem",
              padding: "1rem",
              width: "fit-content",
              maxWidth: "80%",
              marginBottom: "1rem",
              marginLeft: "auto",
            })
          }
          style={{
            "background-color": props.bgColorMessagePerson || "#025CDB",
            color: props.textColorMessagePerson || "white",
          }}
        >
          <svg
            width="40px"
            height="24px"
            viewBox="0 0 40 24"
            preserveAspectRatio="xMidYMid"
          >
            <circle cx="5" cy="12" r="5" fill="rgba(255,255,255,1)">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="12;5;12;12"
                keyTimes="0;0.255;0.51;1"
                dur="0.8474576271186441s"
                begin="-0.4322033898305085s"
              ></animate>
            </circle>
            <circle cx="20" cy="12" r="5" fill="rgba(255,255,255,.75)">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="12;5;12;12"
                keyTimes="0;0.255;0.51;1"
                dur="0.8474576271186441s"
                begin="-0.288135593220339s"
              ></animate>
            </circle>
            <circle cx="35" cy="12" r="5" fill="rgba(255,255,255,.5)">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="12;5;12;12"
                keyTimes="0;0.255;0.51;1"
                dur="0.8474576271186441s"
                begin="-0.1440677966101695s"
              ></animate>
            </circle>
          </svg>
        </div>
      </Show>
    </div>
  );
}

export default ChatMessages;
