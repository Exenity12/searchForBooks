import  './components.css';

const arrayOfSelector: Array<string> = ["all", "art", "biography", "computers", "history", "medical", "poetry"];

const Selector = (props: any): JSX.Element => {
  return (
    <div className='selector'>
      <div className='selector__categories'>
        <h3 className='selector__categories-title'>Categories</h3>
        <select className='selector__categories-select' onChange={event => props.changeCategory(event)}>
          {arrayOfSelector.map((category: string, index: number) => (
            <option className='selector__categories-select_item' key={index}>{category}</option>
          ))}
        </select>
      </div>

      <div className='selector__sorting'>
        <h3 className='selector__sorting-title'>Sorting by</h3>
        <select className='selector__sorting-select' onChange={event => props.changeSorting(event)}>
          <option className='selector__sorting-select_item'>relevance</option>
          <option className='selector__sorting-select_item'>newest</option>
        </select>
      </div>
    </div>
  );
};

export default Selector