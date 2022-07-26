import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from './actions/index'
import "./dashboard.css"

class Users extends Component {
    constructor(props){
        super(props);
        this.state=
        {deleteButton:true};
        this.handleButton=this.handleButton.bind(this)
    }
    componentDidMount(){
        this.props.getUsers()
        
    }
    handleButton(id){
        // event.preventDefault();
        
        document.getElementById(id).style.display="none";   
    }
    render() {
        const {users} = this.props.users
        console.log(this.props.users)

        
        return (

            <>
           <section>
            {users.map(u=>
  <div className="column card-style" id={u.author}>
    <figure>
      <img
        src={u.urlToImage}
      />
    </figure>
    <div className="card-text">
      <h4>{u.title}</h4>
      <p className="ellipsis">
      {u.description}
      </p>
    </div>
    <a href='#' id='delete-id' onClick={()=>this.handleButton(u.author)}>Delete</a>
  </div>
  )}
  
</section>
          </>
          
          
                     
                  )
              }
          }
          
          const mapStateToProps  = (state) => ({
            users:state.users,
            
        })
          
          export default connect(mapStateToProps, {getUsers})(Users)