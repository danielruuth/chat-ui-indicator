# chat-ui

**This is a fork of @nvima's great code, with a minor edition of adding a chat indicator to the component.**

Added the prop :botTyping (bool) to indicate if the bot is "typing":
```
<Chat :chat="chatLog" :botTyping="botTyping" :onSend="handleMessage" />
```
The rest of the component works as described bu nvima


## Original repos readme

This Chat is fully customizable.
Currently supported Frameworks: Vue3, React, Solid

<img src="https://raw.githubusercontent.com/nvima/chat-ui/main/docs/images/chatbotpreview.gif" height="600">

## Usage Vue3
<a href="https://stackblitz.com/github/nvima/chat-ui/tree/main/dev/vue3-npm?file=src%2FApp.vue">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>

```
npm install @chat-ui/vue3
```

```
<script setup>
    import { Chat } from "@chat-ui/vue3";
    function handleMessage(message){
        console.log(message)
    }
</script>
<template>
    <Chat :chat="[]" :onSend="handleMessage" />
</template>
```

## Usage React
<a href="https://stackblitz.com/github/nvima/chat-ui/tree/main/dev/react-npm?file=src%2FApp.js">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>

```
npm install @chat-ui/react
```

```
import { Chat } from '@chat-ui/react'

function App() {
    function handleSendMessage(text) {
        console.log(text)
    }

    return (
        <div>
            <Chat
                chat={[]}
                onSend={(text) => handleSendMessage(text)}
            />
        </div >
    );
}

export default App;
```

## Usage Solid
<a href="https://stackblitz.com/github/nvima/chat-ui/tree/main/dev/solid-npm?file=src%2FApp.jsx">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>

```
npm install @chat-ui/solid
```

```
import { Chat } from '@chat-ui/solid'

function handleMessage(input) {
    console.log(input);
}

function App() {
    return (
        <Chat chat={[]} onSend={(text) => handleMessage(text)}
        />
    );
}

export default App;
```

## Props

The options you can pass into the component are listed below.

### Required

- **onSend**: `function`. onSend gives you the message `string` the user has send within the chat. The string can be empty, when the user sends an empty message

- **chat**: `array`. chat is an array of chatmessages `object` that has the keys "message", "type", "timestamp". All 3 keys are strings. The Timestamp key is optional. The message and the type key ('chatbot', 'customer') are required.
Ex.
[
    { message: 'Hi! How are you?', type: 'chatbot' },
    { message: 'Hello, im fine, thanks.', type: 'person', timestamp: '3:46 PM' }
]
### Optional

- **bgColorHeader**: `string`. Define Background Color of Header 

- **bgColorChat**: `string`. Define Background Color of the Chatbox 

- **bgColorIcon**: `string`. Define Background Color of the Chatbox Icon in the Header 

- **bgColorInput**: `string`. Define Background Color of the Chatbox InputBox 

- **bgColorMessageChatbot**: `string`. Define Background Color of the Message from the Chatbot 

- **bgColorMessagePerson**: `string`. Define Background Color of the Message from a Person 

- **bgColorMessageTimestamp**: `string`. Define Background Color of the Timestamp from Messages 

- **textColorMessageChatbot**: `string`. Define Text Color of the Message from a Chatbot 

- **textColorMessagePerson**: `string`. Define Text Color of the Timestamp from Person 

- **textColorMessageTimestamp**: `string`. Define Text Color of the Timestamp from Messages 

- **textColorHeader**: `string`. Define Text Color of the Chat Header 

- **textColorInput**: `string`. Define Text Color of the Input Field 

- **fillColorIcon**: `string`. Define Fill Color of the Icon in the Header 

- **margin**: `string`. Define Margin of the Chat ex. '10px' 

- **boxShadow**: `string`. Define Box Shadow of the Chat 

- **height**: `string`. Define the height of the Chat

- **width**: `string`. Define the width of the Chat

- **offline**: `boolean`. Changes the Online to Offline.

- **colorOnline**: `string`. Define the  dot color of Online Status 

- **colorOffline**: `string`. Define the dot color of Offline Status 

- **headerHeight**: `string`. Define Header Heigth of the Chat

- **inputHeight**: `string`. Define Input Field Heigth of the Chat

- **inputPlaceholder**: `string`. Defines a Custom Input Placeholder 

## License

MIT License

Copyright (c) 2023 nvima

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
