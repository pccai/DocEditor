import "./App.scss";
import SlateDocEditor from "src/views";
import { useState } from "react";
import { cs } from "./utils/classnames";
import { IconEdit, IconFile } from "@arco-design/web-react/icon";
import { ThemeAction } from "./components/theme-action";

export const App: React.FC = () => {
  const [isRender, setRender] = useState(false);

  return (
    <div className="doc-editor-container">
      <div className="header">
        <span className="left">Editor</span>
        <div className="right">
          <div onClick={() => setRender(!isRender)}>{isRender ? <IconEdit /> : <IconFile />}</div>
          <ThemeAction />
        </div>
      </div>
      <div className="gap"></div>
      <div className={cs("editor", isRender && "render")}>
        <div className="slate-editor">
          <SlateDocEditor isRender={isRender}></SlateDocEditor>
        </div>
      </div>
    </div>
  );
};
