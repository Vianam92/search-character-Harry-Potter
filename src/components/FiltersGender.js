const FilterGender = (props) =>{
    const handleChangeHouse = (eve) =>{
        props.handleSearch({
            key:"gender",
            value:eve.target.value,
        })
    }
return (
    <>
    <label className={`form-${props.searchHouse}__label`} htmlFor="gender">Selecciona el género:</label>
    <select id="gender" name="gender" onChange={handleChangeHouse} value={props.searchGender} className={`form-${props.searchHouse}__input`}>
        <option value="Any">Sin género</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
    </select>
    </>
)
};

export default FilterGender;