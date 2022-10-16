export function Filter({ value, onChange }) {
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
          onChange={onChange}
          value={value}
          required
        />
      </label>
    </form>
  );
}
