import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";

import App from "./App";
import Error from "./pages/Error";
import Home from "./pages/Home";


const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", // Replace with your actual GraphQL API endpoint
  cache: new InMemoryCache(),
});
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);

