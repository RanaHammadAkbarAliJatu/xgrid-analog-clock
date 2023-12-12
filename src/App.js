import styled from "styled-components";
import clock from "./images/image.svg";
import hour from "./images/hour.svg";
import min from "./images/min.svg";
const RecommendItem = styled.div`
  width: 30pc;
  height: 30pc;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgUrl});
`;
 

function App() {
  return (
    <>
      <RecommendItem imgUrl={clock}>
        <div>hahsdasd</div>
        <RecommendItem style={{    marginTop: "8pc", marginLeft: "13pc",    width: "100%" ,height: "30%"}}imgUrl={min} />
        <RecommendItem style={{    marginTop: "-7pc", marginLeft: "7pc", width: "100%" ,height: "20%"}} imgUrl={hour} />
      </RecommendItem>
    </>
  );
}

export default App;
