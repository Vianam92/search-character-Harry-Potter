import FiltersName from "./FiltersName";
import FiltersHouse from "./FiltersHouse";
import FiltersGender from "./FiltersGender.js";
import FilterSpecies from "./FilterSpecies.js";
import "../styles/Form.scss";

const Filters = props => {
  return (
    <form action="" onSubmit={(ev) => ev.preventDefault()} className={`form-${props.valueHouse}`}>
      <FiltersName searchName={props.value} handleSearch={props.handleSearch} searchHouse={props.valueHouse}/>
      <FiltersHouse
        searchHouse={props.valueHouse}
        handleSearch={props.handleSearch}
      />
      <FiltersGender
        handleSearch={props.handleSearch}
        searchGender={props.valueGender}
        searchHouse={props.valueHouse}
      />
      <FilterSpecies handleSearch={props.handleSearch} searchSpecies={props.searchSpecies}
      searchHouse={props.valueHouse}/>
      <input
        type="reset"
        name="button"
        className={`form-${props.valueHouse}__btn`}
        value="Borrar Búsqueda"
        onClick={props.handleResetBtn}
      />
    </form>
  );
};

export default Filters;
