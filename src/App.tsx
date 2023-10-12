import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import "./App.css";
import { Calendar } from "./components/Calendar/Calendar";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Search } from "./components/Search/Search";
import { Tasks } from "./components/Tasks/Tasks";
import { Dialog } from "./components/Dialog/Dialog";

export interface IData {
  id: string;
  task: string;
  time: string;
  completed: boolean;
}

interface AppProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const App: FC<AppProps> = ({ ...props }): React.ReactElement => {
  const [data, setData] = useState<IData[]>([]);
  const [text, setText] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  const [mode, setMode] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setIsShow(true);
  };

  const handleChangeMode = () => {
    setMode((prev) => !prev);
  };

  const theme = mode ? "dark" : "light";

  return (
    <>
      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 0 40px 0",
        }}
        {...props}
      >
        <div
          style={{
            width: "428px",
            minHeight: "826px",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
          }}
          className={theme}
        >
          <div
            style={{
              width: "100%",
              padding: "45px 20px 0 20px",
              flexGrow: "1",
              position: "relative",
            }}
          >
            <Header handleChangeMode={handleChangeMode} mode={mode} />
            <Calendar />
            <Search data={data} setText={setText} />
            <Tasks data={data} setData={setData} text={text} />
            <Dialog
              isShow={isShow}
              data={data}
              setData={setData}
              setIsShow={setIsShow}
            />
          </div>
          <Footer handleOpenDialog={handleOpenDialog} />
        </div>
      </main>
    </>
  );
};

export default App;
