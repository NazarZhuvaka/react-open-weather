import style from './WeatherForm.module.scss'

function SelectField({ label, value, onChange, options }) {
  return (
    <label className={style.weatherFormLabel}>
      {label}
      <select value={value} onChange={onChange}>
        {options.map(({ value: optionValue, label: optionLabel }) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectField;