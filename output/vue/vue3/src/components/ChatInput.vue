<template>
  <form
    @submit="sendMessage($event)"
    :style="{
      display: 'flex',
      height: inputHeight || '60px',
      backgroundColor: bgColorInput || 'white',
      color: textColorInput || 'black',
    }"
  >
    <input
      class="input"
      @input="indicateMessage($event)"
      :placeholder="inputPlaceholder || 'Type your message here'"
      :value="inputField"
      :style="{
        borderWidth: '0px',
        backgroundColor: bgColorInput || 'white',
        color: textColorInput || 'black',
        width: '100%',
        marginLeft: '1rem',
        fontSize: '1rem',
      }"
    />
    <button
      :style="{
        backgroundColor: bgColorInput || 'white',
        flexShrink: '0',
        all: 'unset',
        cursor: 'pointer',
        margin: 'auto 1rem',
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        :strokeWidth="1.5"
        :style="{
          height: '1.5rem',
          width: '1.5rkm',
        }"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        ></path>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: "chat-input",

  props: [
    "handleSend",
    "handleTyping",
    "inputHeight",
    "bgColorInput",
    "textColorInput",
    "inputPlaceholder",
  ],

  data: () => ({ inputField: "", timeoutVar: null }),

  methods: {
    sendMessage(e) {
      e.preventDefault();
      if (this.handleSend) this.handleSend(this.inputField);
      this.dismissTyping(null);
      this.inputField = "";
    },
    indicateMessage(e) {
      this.inputField = e.target.value;
      if (this.handleTyping) this.handleTyping(true);
      if (this.timeoutVar) {
        clearTimeout(this.timeoutVar);
      }
      this.timeoutVar = setTimeout(() => {
        this.dismissTyping(null);
      }, 3000);
    },
    dismissTyping(e) {
      if (this.handleTyping) this.handleTyping(false);
    },
  },
};
</script>

<style scoped>
.input {
}
.input:focus {
  outline: none;
}
</style>