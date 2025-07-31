import SelectField from "./SelectField";

function WeatherForm({
  selectedSpeed,
  selectedTempUnit,
  onSpeedChange,
  onTempUnitChange,
}) {
  return (
    <form>
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
