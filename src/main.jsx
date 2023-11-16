import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/app/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
