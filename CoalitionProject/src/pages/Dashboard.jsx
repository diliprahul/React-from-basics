import usePatientData from "../hooks/usePatientData";

const Dashboard = () => {
  const { patient, loading } = usePatientData();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Healthcare Dashboard</h1>

      <pre>
        {JSON.stringify(patient, null, 2)}
      </pre>
    </div>
  );
};

export default Dashboard;