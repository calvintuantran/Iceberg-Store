import React from "react";

//Routes
import { RoutesStore } from "./Routes"; //Normal Convention is importing Routes and Wrapping with React  Query

//React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesStore />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
