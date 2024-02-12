import AppSrc from "./src";
import store from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
  <Provider store={store}>
    <AppSrc/>
    </Provider>
  );
};