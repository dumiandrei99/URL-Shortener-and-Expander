import '../App.css';
import PageSelectorButton from './PageSelectorButton';

function PageSelector(props) {
  return (
    <div>
        <PageSelectorButton pressed={props.shortenerPressed} buttonName="Shortener" onPress={props.shortenerOnPress}/>
        <PageSelectorButton pressed={props.expanderPressed} buttonName="Expander" onPress={props.expanderOnPress}/>
        <PageSelectorButton pressed={props.analyticsPressed} buttonName="Analytics" onPress={props.analyticsOnPress}/>
    </div>
  );
}

export default PageSelector;
