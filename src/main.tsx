import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
  queryClient,
  LazyMotion,
  QueryClientProvider,
  ReactQueryDevtools,
  domAnimation,
} from "./config/index.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LazyMotion features={domAnimation}>
          <App />
        </LazyMotion>
        <ReactQueryDevtools buttonPosition="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
