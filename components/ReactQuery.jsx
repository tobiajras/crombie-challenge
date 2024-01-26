"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReactQuery = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQuery;
