import React from 'react';

const Users = ({avatar_url,html_url,login}) => {
    return (
        <div className="card">
        <img src={avatar_url} alt={login}/>
          <h4>{login}</h4>
          <a href={html_url} className="btn">more</a>  
        </div>
    )
}

export default Users
