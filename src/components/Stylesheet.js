
import './Style.css'





const Stylesheet = (props) => {
   const className=props.primary?'primary-color':'secondary-color'

  return <div> <h1 className={className}>Stylesheet</h1></div>;
};

export default Stylesheet;
