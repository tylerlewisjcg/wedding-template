import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "./../../ducks/userReducer";
class Guestbook extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidMount() {
      this.props.getUserInfo();
    }
    


  render() {
    return (
        <div>
            {!!this.props.user? 
     <a href={ process.env.REACT_APP_LOGOUT }><button>Logout</button></a>:
     <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a>
            }
        </div>
    )
  }
}
 
function mapStateToProps(state) {
    return {
      user: state.users.user
    };
  }
  
  export default connect(mapStateToProps, { getUserInfo })(Guestbook);