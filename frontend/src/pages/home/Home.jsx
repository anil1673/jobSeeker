import React, { useEffect } from 'react'
import Herosection from '../../component/herosection/Herosection'
import Jobs from '../jobs/Jobs'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAllJob } from '../../redux'

const Home = () => {
  const dispatch=useDispatch();

  const fetchAllJob = async () => {
    await axios.get("http://localhost:5000/job/getalljob", { withCredentials: true }).then((res) => {
      console.log(res)
      dispatch(setAllJob(res.data.jobs))
    })
  }

  // get all job
  useEffect(() => {
    fetchAllJob();;

  }, []);




  return (
    <>
      <div className="home">
        <Herosection />
        <Jobs />
      </div>
    </>
  )
}

export default Home