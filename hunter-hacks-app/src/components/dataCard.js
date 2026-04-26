export default function DataCard({ stationName, stationData }) {
  // get all entries for this station
  const entries = stationData.filter(s => s.Stop_Name === stationName);

  // prefer entry that has data, fallback to first
  const data = entries.find(e => e.Fare_Evasion !== null) || entries[0];

  if (!data) return null;

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      minWidth: "200px",
      flex: "1"
    }}>
      <h3 style={{ margin: "0 0 12px 0", fontSize: "16px" }}>
        {data.Stop_Name}
      </h3>

      <p style={{ margin: "4px 0", fontSize: "14px" }}>
        <strong>Borough:</strong> {data.Borough}
      </p>

      <p style={{ margin: "4px 0", fontSize: "14px" }}>
        <strong>Routes:</strong> {data.Daytime_Routes}
      </p>

      <p style={{ margin: "4px 0", fontSize: "14px" }}>
        <strong>Fare Evasions:</strong>{" "}
        {data.Fare_Evasion !== null ? data.Fare_Evasion : "No data"}
      </p>

      <p style={{ margin: "4px 0", fontSize: "14px" }}>
        <strong>Evasion Rate:</strong>{" "}
        {data.Evasion_Percentage !== null
          ? (data.Evasion_Percentage * 100).toFixed(4) + "%"
          : "No data"}
      </p>

      <p style={{
        margin: "4px 0",
        fontSize: "14px",
        color:
          data.comparison_to_rest_of_city === "Above Average" ? "red" :
          data.comparison_to_rest_of_city === "Below Average" ? "green" :
          data.comparison_to_rest_of_city === "Near Average" ? "orange" :
          "gray"
      }}>
        <strong>vs. City Average:</strong>{" "}
        {data.comparison_to_rest_of_city ?? "No data"}
      </p>
    </div>
  );
}