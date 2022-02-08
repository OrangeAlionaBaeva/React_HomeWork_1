
import "./App.css";
import DownloadButton from "./MainDiv/DownloadButton";
import ContentDiv from "./MainDiv/ContentDiv";
import SomeTags from "./MainDiv/Sometags";
import Buttons from "./MainDiv/Buttons";

import Image from "./MainDiv/Image";
import { wolveObj } from "./wolvesObj";

function App() {
  const { wolves } = wolveObj;
 

  return (
    <div className="wrapper">
     

      <div className="maninDiv">
        <div>
          <DownloadButton logo="Bootstrap Gallery" buttonNow="Download Now!" />
        </div>
        <div>
          <ContentDiv
            name="HTML Image Gallery"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               orem Ipsum has been the industrys standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type 
               specimen book."
            buttonText="Download Gallery"
          />
        </div>
      </div>

      <SomeTags footer="Put in use some tags" />

      <div className="buttons">
        <Buttons buttonAll="All"></Buttons>
        <Buttons buttonAll="Beautiful"></Buttons>
        <Buttons buttonAll="Creative"></Buttons>
        <Buttons buttonAll="Cool"></Buttons>
        <Buttons buttonAll="Awesome"></Buttons>
      </div>

      <div className="parentImg">
        <div className="wrap">
          {wolves.map((item, inIdx) => (
            <Image
              key={Math.random()}
              source={item.images[1]}
              idx={inIdx}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
