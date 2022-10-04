import '../App.css';

function PageSelectorButton(props) {
  return (
    <button onClick={props.onPress} className={props.pressed ? "page-selector-button-pressed" : "page-selector-button-not-pressed"}>{props.buttonName}</button>
  );
}

export default PageSelectorButton;
