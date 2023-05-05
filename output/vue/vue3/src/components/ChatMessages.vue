<template>
  <div
    id="chat-container"
    :style="{
      height: '100%',
      overscrollBehaviorY: 'contain',
      overflowY: 'auto',
      overflowX: 'hidden',
      backgroundColor: bgColorChat || '#EAEEF3',
      padding: '1.5rem',
    }"
  >
    <template :key="index" v-for="(chatMessage, index) in chat">
      <div>
        <template v-if="chatMessage.type == 'person'">
          <div class="div">
            <div
              class="div-2"
              :style="{
                backgroundColor: bgColorMessagePerson || '#025CDB',
                color: textColorMessagePerson || 'white',
              }"
            >
              <template v-if="chatMessage.timestamp">
                <div
                  class="div-3"
                  :style="{
                    backgroundColor: bgColorMessageTimestamp || 'white',
                    color: textColorMessageTimestamp || 'black',
                  }"
                >
                  {{ chatMessage.timestamp }}
                </div>
              </template>

              {{ chatMessage.message }}
            </div>
          </div>
        </template>

        <template v-if="chatMessage.type == 'chatbot'">
          <div class="div">
            <div
              class="div-4"
              :style="{
                backgroundColor: bgColorMessageChatbot || 'white',
                color: textColorMessageChatbot || 'black',
              }"
            >
              <template v-if="chatMessage.timestamp">
                <div
                  class="div-5"
                  :style="{
                    backgroundColor: bgColorMessageTimestamp || 'white',
                    color: textColorMessageTimestamp || 'black',
                  }"
                >
                  {{ chatMessage.timestamp }}
                </div>
              </template>

              {{ chatMessage.message }}
            </div>
          </div>

          <template v-if="chatMessage.options">
            <div class="div-6">
              <template
                :key="index"
                v-for="(option, index) in chatMessage.options"
              >
                <button
                  class="button"
                  :style="{
                    backgroundColor: bgColorMessagePerson || '#025CDB',
                    color: textColorMessagePerson || 'white',
                  }"
                  @click="selectOption(option)"
                >
                  {{ option }}
                </button>
              </template>
            </div>
          </template>
        </template>
      </div>
    </template>

    <template v-if="botTyping">
      <div
        class="div-7"
        :style="{
          backgroundColor: bgColorMessageChatbot || 'white',
          color: textColorMessageChatbot || 'black',
        }"
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
    </template>

    <template v-if="isTyping == 'customer'">
      <div
        class="typing div-8"
        :style="{
          backgroundColor: bgColorMessagePerson || '#025CDB',
          color: textColorMessagePerson || 'white',
        }"
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
    </template>
  </div>
</template>

<script>
export default {
  name: "chat-messages",

  props: [
    "handleSelectOption",
    "bgColorChat",
    "chat",
    "bgColorMessagePerson",
    "textColorMessagePerson",
    "bgColorMessageTimestamp",
    "textColorMessageTimestamp",
    "bgColorMessageChatbot",
    "textColorMessageChatbot",
    "botTyping",
    "isTyping",
  ],

  data: () => ({ chatElementAdded: false }),

  updated() {
    const container = document.getElementById("chat-container");
    if (container && this.chatElementAdded) {
      this.scrollToEnd(container);
      this.chatElementAdded = false;
    }
  },
  watch: {
    onUpdateHook0: {
      handler() {
        const container = document.getElementById("chat-container");
        if (container) this.chatElementAdded = true;
      },
      immediate: true,
    },
  },

  computed: {
    onUpdateHook0() {
      return {
        0: this.chat.length,
      };
    },
  },

  methods: {
    selectOption(index) {
      if (this.handleSelectOption) this.handleSelectOption(index);
      console.log("Option selected");
    },
    scrollToEnd: function scrollToEnd(container) {
      const containerHeight = container.clientHeight;
      const contentHeight = container.scrollHeight;
      container.scrollTop = contentHeight - containerHeight;
    },
  },
};
</script>

<style scoped>
.div {
  position: relative;
}
.div:hover div {
  display: block;
}
.div-2 {
  position: relative;
  border-radius: 0.75rem;
  padding: 1rem;
  width: fit-content;
  max-width: 80%;
  margin-bottom: 1rem;
  margin-left: auto;
}
.div-3 {
  position: absolute;
  width: max-content;
  display: none;
  bottom: 0px;
  border-radius: 0.25rem;
  left: 0px;
  transform: translateX(-50%) translateY(50%);
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 2px;
  padding: 0.25rem;
  z-index: 9999;
}
.div-4 {
  position: relative;
  border-radius: 0.75rem;
  padding: 1rem;
  width: fit-content;
  max-width: 80%;
  margin-bottom: 1rem;
  margin-right: auto;
}
.div-5 {
  position: absolute;
  width: max-content;
  display: none;
  bottom: 0px;
  right: 0px;
  border-radius: 0.25rem;
  transform: translateX(50%) translateY(50%);
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 2px;
  padding: 0.25rem;
  z-index: 9999;
}
.div-6 {
  display: flex;
  align-items: flex-start;
  top: -1.7rem;
  left: 1rem;
  position: relative;
}
.button {
  position: relative;
  border-radius: 0.5rem;
  padding: 0.2rem 1rem 0.2rem 1rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
}
.div-7 {
  position: relative;
  border-radius: 0.75rem;
  padding: 1rem;
  width: fit-content;
  max-width: 80%;
  margin-bottom: 1rem;
  margin-right: auto;
}
.div-8 {
  position: relative;
  border-radius: 0.75rem;
  padding: 1rem;
  width: fit-content;
  max-width: 80%;
  margin-bottom: 1rem;
  margin-left: auto;
}
</style>