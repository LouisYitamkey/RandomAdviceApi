import React, { useEffect, useState } from "react";
import Button from "../components/button";
import { Puff } from "react-loader-spinner";

interface AdviceApi {
  slip: {
    id: number;
    advice: string;
  };
}

const Advice: React.FC = () => {
  const [advice, setAdvice] = useState<null | AdviceApi>(null);
  const [loading, setLoading] = useState<boolean>(true); // Initially set to true

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const response = await fetch("https://api.adviceslip.com/advice");
      const jsonData = await response.json();
      setAdvice(jsonData);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="pb-10 font-normal"> Quotes generated by API.</p>
      {/* Loading indicator */}
      {loading && (
        <p>
          <Puff
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          .
        </p>
      )}

      {/* Display advice if available */}
      {!loading && advice && (
        <div className="bg-white p-5 rounded-md">
          <h1 className="font-bold text-xl md:text-5xl py-20 px-16 text-center">
            "{advice.slip.advice}"
          </h1>
        </div>
      )}

      {/* Button component with onClick handler to trigger fetchData */}
      <Button label="Generate quote" onClick={fetchData} />
      <p> Louis Bonglam Yitamkey ©</p>
    </div>
  );
};

export default Advice;
