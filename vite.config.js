import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
  "/api": {
    target: "https://chat-backend-a4vm.onrender.com",
    changeOrigin: true,
    timeout: 600000,        // client timeout: 10 minutes
    proxyTimeout: 600000,   // proxy timeout: 10 minutes
  },
},

	},
});
