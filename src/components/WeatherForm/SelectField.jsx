import style from './WeatherForm.module.scss'

function SelectField({ label, value, onChange, options }) {
  return (
    <label className={style.weatherFormLabel}>
      {label}
      <select value={value} onChange={onChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectField;