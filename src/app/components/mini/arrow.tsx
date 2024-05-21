import { LeftNavigationIcon } from "@/assets/icons/left-navigation-icon";
import { RightNavigationIcon } from "@/assets/icons/right-navigation-icon";

function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
      <div  style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "10px",
        top:"50%",
        cursor:"pointer"
      }}
      onClick={onClick} >
          <RightNavigationIcon/>
      </div>
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div style={{
        ...style,
        display: "block",
        position: "absolute",
        zIndex: "9",
        left: "10px",
        top:"50%",
        cursor:"pointer"
      }}
      onClick={onClick} >
        <LeftNavigationIcon/>
      </div>
    );
  }
  
  export { SampleNextArrow, SamplePrevArrow};
  