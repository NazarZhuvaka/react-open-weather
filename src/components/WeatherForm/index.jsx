import SelectField from "./SelectField";
import style from "./WeatherForm.module.scss";

function WeatherForm({
  selectedSpeed,
  selectedTempUnit,
  onSpeedChange,
  onTempUnitChange,
}) {
  return (
    <form className={style.weatherForm}>
      <SelectField
        label="Wind speed unit:"
        value={selectedSpeed}
        onChange={(e) => onSpeedChange(e.target.value)}
        options={[
          { value: "Km/h", label: "Km/h" },
          { value: "M/s", label: "M/s" },
        ]}
      />
      <SelectField
        label="Temperature unit:"
        value={selectedTempUnit}
        onChange={(e) => onTempUnitChange(e.target.value)}
        options={[
          { value: "*C", label: "*C" },
          { value: "*F", label: "*F" },
        ]}
      />
    </form>
  );
}

export default WeatherForm;
