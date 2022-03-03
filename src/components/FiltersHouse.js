const FiltersHouse = (props) =>{
    const handleChangeHouse = (eve) =>{
        props.handleSearch({
            key:"house",
            value:eve.target.value,
        })
    }
return(
    <>
    <label htmlFor="house" className={`form-${props.searchHouse}__label`}>Selecciona la casa:</label>
    <select id="house" name="house" className={`form-${props.searchHouse}__input`} onChange={handleChangeHouse} value={props.searchHouse}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
    </select>
    </>
)
};

export default FiltersHouse;