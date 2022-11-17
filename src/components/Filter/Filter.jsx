import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'Redux/slices';

export function Filter() {
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(updateFilter(e.target.value));
  };
  const value = useSelector(state => state.filter.filterValue);
  return (
    <form>
      <label>
        Filter
        <input
          autoComplete="off"
          type="text"
          name="filter"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={e => {
            onChange(e);
          }}
          value={value}
          required
        />
      </label>
    </form>
  );
}
