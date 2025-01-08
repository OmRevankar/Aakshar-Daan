import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        chat: './chat.html',
        chat_a: './chat_a.html',
        chat_b: './chat_b.html',
        chat_c: './chat_c.html',
        donate: './donate.html',
        notification: './notification.html',
        sidebar: './sidebar.html',
        upload: './upload.html',
      },
    },
  },
});
