
import './Style.css'





const Stylesheet = (props) => {
   const primaryColor=props.primaryColor?'primary-color':''
   const fontXl=props.fontXl?'font-xl':''

  return <div> <h1 className={`${primaryColor } ${fontXl }`}>Stylesheet</h1></div>;
};

export default Stylesheet;
