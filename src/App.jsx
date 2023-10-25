import { DefaultTemplate } from "./components/DefaultTemplate";
import { RouterMain } from "./routes"

export const App = () => {
  return (
    <>
    <DefaultTemplate>
      <RouterMain />
    </DefaultTemplate>
    </>
  );
};


