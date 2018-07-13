import React, { Component } from 'react'

class Countdown extends Component {
    constructor() {
        super();
        this.state = {
            now: new Date().getTime()
        };

      }
      componentDidMount() {
        this.interval = setInterval(() => this.setState({ now: Date.now() }), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    
     countdown(){
         let countDownDate = new Date('Aug 25, 2018 9:00:00').getTime();
         let now = this.state.now
        let timeRemaining = countDownDate - now;
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    let display = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
    if(timeRemaining <= 0){
        return "CONGRATULATIONS JENNIFER AND JORDAN!!!"
    }
    return 'Time until the big day: ' + display
     }

      render() {
        return(
          <div>
            {this.countdown()}
          </div>
        );
      }
    }
 
export default Countdown;
