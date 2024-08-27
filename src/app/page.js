"use client"

import React, { useEffect, useState } from "react";
import TableComponent from "./components/tablecomponent";
import LoadingComponent from "./components/loadingcomponent";

/**
 * Home page of application that calls RandomUser API and offloads data to
 * a TableComponent (see import)
 * 
 * Intermediate loading spinner is supplied awaiting return from Fetch
 * 
 * @returns JSX
 */
export default function Home() {

  const [data, setData] = useState({}); // API state
  const [loading, setLoading] = useState(true); // Loading state for spinner, enable by default

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=name,location,dob&nat=us,ca&results=100')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error))
      .finally(() => setLoading(false)); // Disable spinner
  }, []);

  return (
    <main className="flex flex-col items-center bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold py-4">RandomUser Project</h1>
      {loading ? <LoadingComponent></LoadingComponent> : <TableComponent data={data}></TableComponent>}
    </main>
  );
}