import { useState, useEffect } from 'react';

function useFetchThreads() {
  const [threads, setThreads] = useState([])
  
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const fetchData = await fetch('http://localhost:3001/threads')
    const threadsData = await fetchData.json()
    setThreads(threadsData)
  }

  return threads;
}

export default useFetchThreads;
