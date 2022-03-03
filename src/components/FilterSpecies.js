const FilterSpecies = (props) => {
  const handleChangeSpecies = (eve) => {
    props.handleSearch({
      key: "species",
      value: eve.target.value,
    });
  };
  return (
    <>
      <label htmlFor="species" className={`form-${props.searchHouse}__label`}>Busca por especie</label>
      <select
        id="species"
        name="species"
        onChange={handleChangeSpecies}
        value={props.searchSpecies}
        className={`form-${props.searchHouse}__input`}
      >
        <option value="all">Todos</option>
        <option value="human">Humano</option>
        <option value="half-giant">Medio Gigante</option>
        <option value="worewolf">Hombre Lobo</option>
      </select>
    </>
  );
};

export default FilterSpecies;
