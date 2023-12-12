import React from 'react'

function Formlabels() {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <input type="submit" value='send' />  
      </form>
    </div>
  )
}

export default Formlabels