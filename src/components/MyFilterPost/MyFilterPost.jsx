import React, {useState, useContext} from 'react'
import {GlobalContextState, GlobalContextActions} from '../../context/GlobalState';

const MyFilterPost = () => {
  const [selectedUsers, setSelectedUsers] = useState(false)
  const {filterPosts} = useContext(GlobalContextState)
  const test = () => {
    setSelectedUsers(!selectedUsers)
    selectedUsers ? filterPosts([2]) : filterPosts([])
  }
  return (
    <div>
      <div>
        <ul>
          {/* <li onClick={test}><input type="checkbox" checked={selectedUsers}/>User 1</li> */}
        </ul>
      </div>
    </div>
  )
}

export default MyFilterPost
