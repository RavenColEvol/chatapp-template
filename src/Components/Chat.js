import React from 'react';
export default class Chat extends React.Component{
    constructor(){
        super();
        this.scrollDown=()=>{
            document.querySelector('.message-container').scrollTop =  document.querySelector('.message-container').scrollHeight
        }
    }
    render(){
        return(
            <div className="full chat">
                <div className="container-fluid">
                    <div className="row">
                        <div className="three columns">
                            <ul>
                                <li><a href="">Railways</a></li>
                                <li><a href="">Bus</a></li>
                                <li><a href="">Banks</a></li>
                                <li><a href="">Hotel</a></li>
                                <li><a href="">Government office</a></li>
                                <li><a href="">Others</a></li>
                            </ul> 
                        </div>
                        <div className="nine columns">
                            <div className="message-container">
                            <ul>
                                <li><a href="">Hello</a></li>
                                <li><a href="">Hi</a></li>
                                <li><a href="">How are you</a></li>
                                <li><a href="">Im fine</a></li>
                                <li><a href="">What about you?</a></li>
                                <li><a href="">Hello</a></li>
                                <li><a href="">Hi</a></li>
                                <li><a href="">How are you</a></li>
                                <li><a href="">Im fine</a></li>
                                <li><a href="">What about you?</a></li>
                                <li><a href="">Hello</a></li>
                                <li><a href="">Hi</a></li>
                                <li><a href="">How are you</a></li>
                                <li><a href="">Im fine</a></li>
                                <li><a href="">What about you?</a></li>
                            </ul>
                            </div>

                            <form  className="form-group">
                            <input type="text" id="inp" placeholder=" Enter text"/>
                            <input type="button" id='button' onClick={this.scrollDown} value="Submit"/>
                            </form>
                            
                        </div>
                    </div>
                </div>
    </div>
        )
    }
}
    