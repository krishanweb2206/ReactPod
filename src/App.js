import React from 'react'
import './App.css';

// IMPORT THE REQUIRED COMPONENTS
import Buttons from './Components/Button/Button';
import Screen from './Components/Screens/Screen';

// IMPORT REQUIRED LIBRARY
import ZingTouch from "zingtouch";
import $ from "jquery";


class App extends React.Component{

  constructor(){
    super();
    
    this.selected=0;
    this.changeAngle=0;

    // DEFINE A STATE FOR WHOLE APP
    this.state = {
      options: ["Games", "Music", "Settings", "CoverFlow"],
      Genraloptions: ["Games", "Music", "Settings", "CoverFlow"],
      musicOptions: ["Songs", "Artists", "Albums"],
      optionidx: 0,
      showScreen: -1,
    };

  }

  componentDidMount(){

    var element = document.getElementsByClassName("button-container")[0];
    var zingtouch = new ZingTouch.Region(element);

    // HANDLE THE ROTATION EVENT
    zingtouch.bind(element, "rotate",(event)=>{

      if(document.getElementsByClassName('screen-menu')[0].classList.contains('width-50')){
          let distance = event.detail.distanceFromLast;
          this.changeAngle += distance;

          if(this.changeAngle > 60){

            this.selected++;
            this.selected=this.selected % this.state.options.length;

            this.setState({
              optionidx:this.selected
            });

            this.changeAngle=0;
          }
          else if(this.changeAngle < -60){

            this.selected--;

            if(this.selected === -1){
              this.selected=this.state.options.length-1;
            }

            this.selected = this.selected % this.state.options.length;
            this.setState({
              optionidx: this.selected,
            });
            
            this.changeAngle = 0;
          }
          
      }
      
    });
  }

  // SELECT BUTTONS OPERATION
  selectButtonClick=()=>{

    if(this.state.optionidx===1){

      // CHANGE A STATE WHEN SELECT THE MUSIC OPTION
      this.setState({
        options: this.state.musicOptions,
        showScreen: -1,
        optionidx: 0,
      });
      
      this.selected=0;
      return;
    }

    // CHANGE A STATE WHEN FOR SELECT FOR OTHER OPTIONS (EXCULDE THE MUSIC)
    this.setState({
      showScreen:this.state.optionidx,
      optionidx:0
    })

    this.selected=0;
    this.menuButtonClick();
  }

  // HANDLE THE MENU BUTTON
  menuButtonClick = () => {

     let menuClassList = document.getElementsByClassName('screen-menu')[0].classList;

    //  CHECK FOR MENU IS OPEN OR NOT I.E FIRST CLICK SHOW THE MENU ELSE HIDE THE MENU
     if (menuClassList.contains("width-50")){
        $(".screen-menu").removeClass("width-50");
     }else{
        $(".screen-menu").addClass("width-50");
     }

  };

  // ON MUSIC OPTION FOR GOING BACK TO MAIN MENU
  leftButtonClick=()=>{

    if(document.getElementsByClassName('screen-menu')[0].classList.contains('width-50') && this.state.options.length === 3){

      // CHANGE A STATE FROM MUSIC MENU
         this.setState({
           options: this.state.Genraloptions,
           showScreen: -1,
           optionidx: 0,
         });
    }

  }

  // HANDLE THE RIGHT BUTTON
  rightButtonClick=()=>{
    console.log("right button clicked");
  }

  // HANDLE THE PLAYPAUSE BUTTON
  playPauseButton=()=>{
    console.log("Play-Pause button clicked");
  }
  
  render(){

    return (
      // APP COMPONENT 
      <div className="App">
        
        {/* SCREEN COMPONENT WITH PROPS */}
        <Screen 
          menuoptions={this.state.options}
          optionidx={this.state.optionidx}
          showScreen={this.state.showScreen}
        />

        {/* BUTTONS COMPONENT WITH PROPS */}
        <Buttons
          selectButtonClick={this.selectButtonClick}
          menuButtonClick={this.menuButtonClick}
          leftButtonClick={this.leftButtonClick}
          rightButtonClick={this.rightButtonClick}
          playPauseButton={this.playPauseButton}
        />
      </div>
    );
  }
}



export default App;
