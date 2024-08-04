<script setup>
import './tehchatpage.css';
import { ref, onMounted, onUnmounted } from 'vue';
import socket from '../services/socket';

const message = ref('');
const messages = ref([]);
const socketId = ref('');

const addMessage = (msg) => {
  messages.value = [...messages.value, msg];
};

onMounted(() => {
  socket.on('connect', () => {
    socketId.value = socket.id; // Store the current user's socket ID
  });

  socket.on('message', (msg) => {
    if (msg.senderId !== socketId.value) {
      addMessage(msg);
    }
  });

  return () => {
    socket.off('message');
  };
});

const sendMessage = () => {
  if (message.value.trim()) {
    const msg = { content: message.value, senderId: socketId.value };
    addMessage(msg); // Add sent message locally
    socket.emit('message', msg);
    message.value = ''; // Clear the message input after sending
  }
};
</script>

<template>
  <main class="the_chattingmaion">
    <aside class="chatting_aside">
      <div class="topaside">
        <div class="chattinglogo">
          <h1>spachat</h1>
        </div>
        <div class="chatnowanimation">
          <h2>Chat now</h2>
        </div>
      </div>
      <div class="bottomaside">
        <div class="bottomasideoptions">
          <button class="theasideoptions">Profile</button>
          <button class="theasideoptions">Search</button>
          <button class="theasideoptions">ADD</button>
          <button class="theasideoptions">Settings</button>
        </div>
        <div class="bottomasideuser">
          <div class="user_show"></div>
        </div>
      </div>
    </aside>
    <section class="chatting_section">
      <div class="chatting_section_topnav">
        <h2>Username</h2>
        <button type="submit">Logout</button>
      </div>
      <div class="message_section">
        <ul class="message_section_ul">
          <li v-for="(msg, index) in messages" :key="index" :class="{ received: msg.senderId !== socketId.value, sent: msg.senderId === socketId.value }">{{ msg.content }}</li>
        </ul>
      </div>
      <div class="write_a_message">
        <textarea
          v-model="message"
          @keyup.enter="sendMessage"
          placeholder="Type your message..."
          id="typemessage"
        ></textarea>
        <input type="file" id="sendfile">
      </div>
    </section>
  </main>
</template>