import { useEffect, useState } from "react";
import { getPatients } from "../services/api";

const usePatientData = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const data = await getPatients();

        const jessica = data.find(
          (p) => p.name === "Jessica Taylor"
        );

        setPatient(jessica);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, []);

  return { patient, loading };
};

export default usePatientData;
