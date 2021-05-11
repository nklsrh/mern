
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <div>
      <h1>Welcome to MERNING</h1>
      <p>below is a list of people</p>
      {users.map(u => <h4 key={u._id}>userName : {u.userName} (email: {u.email})</h4>)}
      <footer>Thanks for watching</footer>
    </div>
  )
}

export default App