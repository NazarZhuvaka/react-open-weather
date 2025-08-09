import SelectField from "./SelectField";
import style from "./WeatherForm.module.scss";

function WeatherForm({
  selectedSpeed,
  selectedTempUnit,
  onSpeedChange,
  onTempUnitChange,
}) {
  const speedOptions = [
    { value: "Km/h", label: "Km/h" },
    { value: "M/s", label: "M/s" },
  ];

  const tempOptions = [
    { value: "°C", label: "°C" },
    { value: "°F", label: "°F" },
  ];

  return (
    <form className={style.weatherForm}>
      <SelectField
        label="Wind speed unit:"
        value={selectedSpeed}
        onChange={(e) => onSpeedChange(e.target.value)}
        options={speedOptions}
      />
      <SelectField
        label="Temperature unit:"
        value={selectedTempUnit}
        onChange={(e) => onTempUnitChange(e.target.value)}
        options={tempOptions}
      />
    </form>
  );
}

export default WeatherForm;
