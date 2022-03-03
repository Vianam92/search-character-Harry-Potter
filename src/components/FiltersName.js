const FiltersName = (props) => {
    const handleSearch = eve =>{
        props.handleSearch({
          key:"character",
          value:eve.target.value,
        });
    }
  return (
    <>
      <label className={`form-${props.searchHouse}__label`} htmlFor="character">Busca por Personaje</label>
      <input className={`form-${props.searchHouse}__input`} type={props.inputType} placeholder="Ej: Hermione" name="character" id="character" value={props.searchName} onChange={handleSearch}/>
    </>
  );
};

// Estas son las default props
FiltersName.defaultProps = {
  inputType: 'text'
};

export default FiltersName;
