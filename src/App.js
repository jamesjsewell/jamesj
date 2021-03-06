import React, { Component } from 'react'
import './App.css'
import refugeeRequests from './images/refugee-requests.png'
import snake from './images/snake.png'
import weather from './images/weather.png'
import gameTally from './images/gametally.png'

import backbone from './images/skills/backbone.svg'
import css from './images/skills/css.svg'
import git from './images/skills/git.svg'
import github from './images/skills/github.svg'
import html from './images/skills/html.svg'
import illustrator from './images/skills/illustrator.svg'
import jquery from './images/skills/jquery.svg'
import js from './images/skills/js.svg'
import lightroom from './images/skills/lightroom.svg'
import mongodb from './images/skills/mongodb.png'
import node from './images/skills/node.svg'
import photoshop from './images/skills/photoshop.svg'
import premier from './images/skills/premier.svg'
import react from './images/skills/react.svg'
import terminal from './images/skills/terminal.svg'
import trello from './images/skills/trello.svg'

var skillsArray = [js, html, css, jquery, backbone, react, node, mongodb, terminal, git, github, photoshop, illustrator]
class App extends Component {

  constructor(props){
    super(props)
    this.state =
    {
      currentModal: null,
      aTagLoading: false
    } 
  }

  aTagClick(){
    this.setState({aTagLoading: true})
  }

  projectSeeMore(project){

    function closeModal(){
      this.setState({currentModal: null})
      document.body.classList.toggle('modal_open', false)
      this.setState({githubUrl: null, homepage: null, description: null })
    }

    var projComponent = null
    
    projComponent = <Modal project={project} closeModal={closeModal.bind(this)} viewLive={this.aTagClick.bind(this)} />


    if(projComponent){
      document.body.classList.toggle('modal_open', true)
      this.setState({currentModal: projComponent })
    }

  }

  renderProjects(){

    var projects = {
      refugeeRequests: {title:"Inventory Management Prototype", name: "help_harvey_evacuees", video: "https://www.youtube.com/embed/eOykScleL08?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"},
      sifter: {title:"Unearthed Hackathon Submission", name: "sifter", description: "dfadsfa", video: "https://www.youtube.com/embed/4KPtIy6wtsM?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"},
      snakeRemake: {title: "Remake of Snake", name:"redux_snake", description: "fasdfasdf", video: "https://www.youtube.com/embed/muzEI9s64Xs?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" },
      spaceApps: {title:"Space Apps Challenge Submission", description: "adfsdfadf", name: "asteroidhunt", video: "https://www.youtube.com/embed/wZ2Xs0BpLXw?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" },
      weather: {title:"Weather App Project", name: "weather_app", description: "adfsdd", video: "https://www.youtube.com/embed/WngJ6D0-NUo?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"}

    }
    var projectsArray = []
    for(var i in projects){
      var project = projects[i]
      projectsArray.push(<Project project={project} seeMore={this.projectSeeMore.bind(this)} />)
    }

    return projectsArray
   
  }

  render() {
    return (
      <div className="App">

        {this.state.aTagLoading? <div className="loader_wrapper">
          <div className="container loader_content">

            <div className="donut">
            </div>

            <div>
              <strong>some of my websites are hosted on heroku, this may take a moment to load</strong>
            </div>

          </div>
        </div> : null}

        {this.state.currentModal? this.state.currentModal : null}

        <header className="hero_wrapper u-max-full-width">

          <div className="hero_contents" >
            <div className="logo_wrapper">
              <svg className="logo u-max-full-width" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 360"><path d="M360,353.8V360h72V288h-6.1A108.24,108.24,0,0,1,360,353.8Z" /><path d="M360,0V6.2A108.49,108.49,0,0,1,425.9,72H432V0Z" /><path d="M360,144V108a36,36,0,1,0-36,36,110.2,110.2,0,0,1,36,6.1A108.74,108.74,0,0,1,425.9,216H432V144H360Z" /><path d="M324,216a108.25,108.25,0,0,1-80.5-36,107.51,107.51,0,0,1-27.4-72V0h-72V252a36,36,0,1,1-72,0V216H0v36a105.68,105.68,0,0,0,6.2,36,108.06,108.06,0,0,0,203.7,0,106,106,0,0,0,6.1-36V216h72v36a36,36,0,1,0,36-36Z" /></svg>
            </div>
            <div className="header_text"><h6 className="tagline">FRONT END ENGINEER</h6> <p className="subheader_text">Houston, TX</p></div>
          </div>
        </header>

        <div className="row social_icons_wrapper">

          <div className="social_icons twelve column">
            <a href="https://github.com/jamesjsewell"><svg id="github" className="social_icon " version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 432 432" >
              <path d="M72.4,199.2c-0.6,0,6.9,16,7.1,16c16.5,29.5,48.4,47.8,102.1,52.9c-7.7,5.7-16.9,16.6-18.1,29.1c-9.6,6.1-29,8.2-44.1,3.5c-21.1-6.5-29.3-47.6-60.8-41.8c-6.8,1.2-5.5,5.7,0.4,9.5c11.7,6.9,20.7,17.5,25.7,30.1c5.4,12.5,16.7,34.9,52.4,34.9c8.1,0,16.1-0.5,24.1-1.7c0,0,0.3,32,0.3,44.4c0,14.3-19.7,18.4-19.7,25.4c0,2.7,6.5,3,11.7,3c10.3,0,31.9-8.5,31.9-23.4c0-11.8,0.2-51.7,0.2-58.6c0-15.2,8.3-20,8.3-20s1,81.3-2,92.2c-3.5,12.8-9.9,11-9.9,16.7c0,8.5,25.9,2.1,34.5-16.6c6.6-14.5,3.7-94.3,3.7-94.3l7.1-0.1c0,0,0.4,36.5,0.2,53.2c-0.3,17.3-1.4,39.1,9,49.4c6.9,6.8,29.1,18.7,29.1,7.8c0-6.3-12.2-11.5-12.2-28.6v-78.8c9.8,0,8.3,25.9,8.3,25.9l0.7,48.1c0,0-2.1,17.6,19.3,24.8c7.6,2.6,23.7,3.3,24.5-1.1c0.8-4.4-19.5-10.9-19.7-24.4c-0.1-8.3,0.4-13.1,0.4-49s-4.9-49.2-22-59.8c52.7-5.3,85.5-18.2,101.4-52.6c1.2,0,6.5-16.1,5.9-16.1c3.9-15.2,5.8-30.8,5.9-46.5c0-49.3-24.1-66.7-28.7-74.9c6.8-37.3-1.2-54.3-4.8-60.1c-13.7-4.8-47.3,12.2-65.8,24.2c-30-8.6-93.5-7.8-117.3,2.2c-43.9-30.9-67.2-26.2-67.2-26.2s-15,26.5-3.9,65.2C75.8,101.2,65,114,65,148C65,167.2,67.2,184.2,72.4,199.2z" />
            </svg></a>

            <a href="https://www.facebook.com/sewelljames"><svg id="facebook" className="social_icon " version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 432 432" >
              <path d="M174,378h66.9V216h44.7l5.9-55.8h-50.6v-28c0-14.6,1.4-22.4,22.3-22.4h27.9V54h-44.7c-53.7,0-72.5,27.1-72.5,72.6v33.5h-33.4V216H174V378z" />
            </svg></a>

            <a href="https://www.linkedin.com/in/jamesjsewell/"><svg id="linkedin" className="social_icon " version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 432 432">
              <path d="M378,370.9V251.1c0-64.2-34.3-94.1-80-94.1c-36.9,0-53.4,20.3-62.6,34.5v-29.6H166c0.9,19.6,0,209,0,209h69.5V254.2c0-6.2,0.4-12.5,2.3-16.9c5-12.5,16.4-25.4,35.6-25.4c25.2,0,35.2,19.2,35.2,47.3v111.8H378z M92.8,133.3c24.2,0,39.3-16.1,39.3-36.1c-0.4-20.5-15.1-36.1-38.8-36.1S54,76.7,54,97.2c0,20.1,15.1,36.1,38.4,36.1H92.8z M127.5,370.9v-209H58v209H127.5z" />
            </svg></a>

            <a href="https://twitter.com/jamesjsewell"><svg id="twitter" className="social_icon " version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 432 432">
              <path d="M257,85.1c-29.3,10.7-47.7,38.1-45.7,68.2l0.7,11.6l-11.7-1.4c-42.6-5.4-79.8-23.9-111.4-54.9L73.4,93.2l-4,11.4c-8.4,25.3-3,52.1,14.5,70.1c9.3,9.9,7.2,11.4-8.9,5.4c-5.6-1.9-10.5-3.3-11-2.6c-1.6,1.7,4,23.2,8.4,31.7c6.1,11.8,18.5,23.4,32.1,30.3l11.5,5.4l-13.6,0.2c-13,0-13.6,0.2-12.2,5.2c4.7,15.4,23.2,31.7,43.8,38.8l14.5,5l-12.6,7.6c-19.1,11-40.7,17-62.7,17.5c-10.5,0.2-19.2,1.2-19.2,1.9c0,2.4,28.6,15.6,45.2,20.8c49.9,15.4,109.1,8.8,153.6-17.5c31.7-18.6,63.2-55.9,78-91.9c8-19.2,15.9-54.2,15.9-71c0-10.9,0.7-12.3,13.8-25.3c5.9-5.6,11.4-11.7,16.4-18.2c2.3-4.5,2.1-4.5-9.8-0.5c-19.9,7.1-22.7,6.2-12.9-4.5c7.2-7.6,15.9-21.3,15.9-25.3c0-0.7-3.5,0.5-7.4,2.6c-6.6,3.3-13.5,6-20.6,8l-12.7,4.1l-11.5-7.8c-6.2-4.3-12.9-7.8-19.9-10.4C286,80.9,267.8,81.3,257,85.1z" />
            </svg></a>

            <a href="https://instagram.com/jamesjsewell/"><svg id="instagram" className="social_icon " version="1.1" viewBox="0 0 512 512">
              <g id="Edges" /><g id="Symbol"><g><path d="M257.2,54.6c65.7,0,73.5,0.3,99.4,1.4c24,1.1,37,5.1,45.7,8.5c11.5,4.5,19.7,9.8,28.3,18.4    c8.6,8.6,13.9,16.8,18.4,28.3c3.4,8.7,7.4,21.7,8.5,45.7c1.2,25.9,1.4,33.7,1.4,99.4s-0.3,73.5-1.4,99.4c-1.1,24-5.1,37-8.5,45.7    c-4.5,11.5-9.8,19.7-18.4,28.3c-8.6,8.6-16.8,13.9-28.3,18.4c-8.7,3.4-21.7,7.4-45.7,8.5c-25.9,1.2-33.7,1.4-99.4,1.4    s-73.5-0.3-99.4-1.4c-24-1.1-37-5.1-45.7-8.5c-11.5-4.5-19.7-9.8-28.3-18.4c-8.6-8.6-13.9-16.8-18.4-28.3    c-3.4-8.7-7.4-21.7-8.5-45.7c-1.2-25.9-1.4-33.7-1.4-99.4s0.3-73.5,1.4-99.4c1.1-24,5.1-37,8.5-45.7c4.5-11.5,9.8-19.7,18.4-28.3    c8.6-8.6,16.8-13.9,28.3-18.4c8.7-3.4,21.7-7.4,45.7-8.5C183.8,54.8,191.5,54.6,257.2,54.6 M257.2,10.3    c-66.8,0-75.2,0.3-101.4,1.5c-26.2,1.2-44.1,5.4-59.7,11.4c-16.2,6.3-29.9,14.7-43.6,28.4C38.8,65.2,30.4,79,24.1,95.1    c-6.1,15.6-10.2,33.5-11.4,59.7c-1.2,26.2-1.5,34.6-1.5,101.4c0,66.8,0.3,75.2,1.5,101.4c1.2,26.2,5.4,44.1,11.4,59.7    c6.3,16.2,14.7,29.9,28.4,43.6c13.7,13.7,27.4,22.1,43.6,28.4c15.6,6.1,33.5,10.2,59.7,11.4c26.2,1.2,34.6,1.5,101.4,1.5    s75.2-0.3,101.4-1.5c26.2-1.2,44.1-5.4,59.7-11.4c16.2-6.3,29.9-14.7,43.6-28.4c13.7-13.7,22.1-27.4,28.4-43.6    c6.1-15.6,10.2-33.5,11.4-59.7c1.2-26.2,1.5-34.6,1.5-101.4s-0.3-75.2-1.5-101.4c-1.2-26.2-5.4-44.1-11.4-59.7    C484,79,475.6,65.2,462,51.6c-13.7-13.7-27.4-22.1-43.6-28.4c-15.6-6.1-33.5-10.2-59.7-11.4C332.4,10.6,324,10.3,257.2,10.3    L257.2,10.3z" /><path d="M257.2,130c-69.8,0-126.3,56.6-126.3,126.3s56.6,126.3,126.3,126.3s126.3-56.6,126.3-126.3S327,130,257.2,130    z M257.2,338.3c-45.3,0-82-36.7-82-82s36.7-82,82-82s82,36.7,82,82S302.5,338.3,257.2,338.3z" /><circle cx="388.6" cy="125" r="29.5" /></g></g></svg>
            </a>

            <a href="https://www.youtube.com/channel/UCzx0HsqacRA3soz3TbC-KGA/videos">
            <svg id="youtube" className="social_icon " version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 432 432">
              <path d="M328.1,306h-21.3l0.1-12.4c0-5.5,4.5-10,10.1-10h1.4c5.5,0,10,4.5,10.1,10L328.1,306z M248,279.4c-5.4,0-9.8,3.6-9.8,8.1v60.3c0,4.5,4.4,8.1,9.8,8.1c5.4,0,9.9-3.6,9.9-8.1v-60.3C257.9,283.1,253.5,279.4,248,279.4L248,279.4z M378,245.7v114.7c0,27.5-23.9,50-53,50H107c-29.2,0-53-22.5-53-50V245.7c0-27.5,23.8-50,53-50h218C354.2,195.7,378,218.2,378,245.7L378,245.7zM121.5,372.9V252h27v-17.9l-72-0.1v17.6H99v121.1h22.5L121.5,372.9z M202.5,270.1h-22.5v64.5c0,9.3,0.6,14,0,15.6c-1.8,5-10.1,10.3-13.3,0.5c-0.5-1.7,0-6.9-0.1-15.7l-0.1-65h-22.5V334c0,9.8-0.2,17.1,0.1,20.4c0.6,5.9,0.4,12.7,5.8,16.6c10.1,7.3,29.6-1.1,34.4-11.5v13.3h18.1L202.5,270.1L202.5,270.1z M274.6,344v-53.7c0-20.5-15.3-32.7-36.1-16.2l0.1-39.9h-22.5L216,371.9l18.5-0.3l1.7-8.6C259.8,384.8,274.7,369.9,274.6,344L274.6,344z M345.1,336.8l-16.9,0.1c0,0.7,0,1.4,0,2.3v9.4c0,5.1-4.2,9.2-9.2,9.2h-3.3c-5.1,0-9.2-4.1-9.2-9.2v-24.8h38.7v-14.6c0-10.6-0.3-21.3-1.1-27.4c-2.8-19.2-29.8-22.3-43.4-12.4c-4.4,3.1-7.7,7.6-9.5,12.7c-1.9,5.5-2.9,13.1-2.9,22.7v32C288.2,390.1,352.9,382.6,345.1,336.8L345.1,336.8z M258.5,163c1.1,2.8,3,5.1,5.4,6.8c2.7,1.8,6,2.7,9.2,2.6c3.1,0.1,6.1-0.9,8.6-2.7c2.8-2.1,4.9-4.9,6.3-8.1l-0.4,8.8h25.1V63.7H293v83.1c-0.6,4.5-4.7,7.8-9.2,7.2c-3.8-0.5-6.8-3.4-7.2-7.2V63.7h-20.7v72c0,9.2,0.2,15.3,0.4,18.4C256.6,157.2,257.3,160.2,258.5,163L258.5,163z M182.4,102.6c0-10.2,0.9-18.3,2.6-24c1.5-5.5,4.8-10.3,9.2-13.8c4.4-3.5,10.1-5.3,17-5.3c5.2-0.1,10.3,1,14.9,3.4c3.9,2,7.3,5,9.7,8.8c2.2,3.4,3.8,7.1,4.6,11.1c1,5.8,1.4,11.6,1.3,17.5v27c0.2,7.3-0.2,14.6-1.2,21.8c-0.8,4.6-2.4,9-4.9,13c-2.3,3.8-5.7,6.9-9.7,8.9c-4.3,2-8.9,3-13.6,2.9c-5,0.1-9.9-0.7-14.5-2.4c-3.8-1.5-7-4.1-9.3-7.4c-2.3-3.6-3.9-7.7-4.7-12c-1.1-7-1.6-14-1.4-21.1L182.4,102.6L182.4,102.6z M202.1,145.1c0,6,4.5,11,10,11c5.5,0,10-4.9,10-11V88.2c0-6-4.5-11-10-11c-5.5,0-10,4.9-10,11V145.1L202.1,145.1z M132.6,173.8h23.7V91.9l28-70.1h-25.8l-14.9,52.1l-15.1-52.3h-25.6l29.8,70.4L132.6,173.8L132.6,173.8z" />
            </svg>
            </a>
            <a href="https://soundcloud.com/jamesjsewell/sets/produced-by-james-sewell"><svg id="soundcloud" className="social_icon " version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 432 432">
              <path d="M54,248.5c0,10.6,4.7,20.6,12.9,27.4v-54.7C58.7,227.9,54,237.9,54,248.5 M80.4,213.9V283c3.3,0.9,6.7,1.4,10.1,1.4H94v-71.7c-1.2-0.1-2.3-0.2-3.5-0.2C87,212.6,83.7,213,80.4,213.9 M110.4,218.4c-0.9-0.6-1.9-1.1-2.8-1.6v67.6h13.6v-90.5C115.6,201.1,111.9,209.5,110.4,218.4 M134.7,181.2v103.2h13.6V174.5C143.5,176.1,138.9,178.4,134.7,181.2 M161.9,171.7v112.7h13.6V172.2c-2.8-0.4-5.7-0.6-8.6-0.6C165.2,171.5,163.5,171.6,161.9,171.7 M196.5,179.7c-4.5-2.7-9.3-4.7-14.3-6.1v110.9h20.4v-113C200.4,174.1,198.4,176.8,196.5,179.7 M209.4,164.7v119.7h129.1v-0.2c27.2-1.7,39.5-18.6,39.5-39.2c0-21.7-16.4-39.4-38.6-39.4c-5.3,0-10.5,1.1-15.3,3.3c-4.5-38.1-39-65.5-77.1-61C233.1,149.6,220,155.4,209.4,164.7" />
            </svg></a>
          </div>

        </div>

        <div className="about_section_wrapper container ">

          <div className="about_section row">

            <div className="bio_wrapper eight columns">
              <div className="bio_header"><h5>About James</h5></div>
              <p>James was a hobbyist developer and wanted a deeper and more practical understanding of web technologies. He
attended The Iron Yard Houston in the spring of 2017. James was able to learn from his instructors and staff daily.
In addition to being given in depth instruction, he applied his knowledge daily thanks to assigned exercises and
projects. He gained experience using version control, even on team projects, and utilizes it frequently. He learned
to use the terminal, UNIX commands, and bash scripting. He learned foundational concepts all the way up to
developing his own web applications with cutting edge frameworks. He continues to adopt new technologies and
develop personal projects.</p>
            </div>

            <div className="skills_wrapper four columns">
              <div className="skills_header"><h5><span>Skills</span></h5></div>
              <div className="skills">

                {skillsArray.map(skill => { return <img className="skill" src={skill} /> })}

              </div>
            </div>
          </div>

        </div>
      
        <div className="projects_section_wrapper row container">
          <div className="projects_header"><h5>Webapp Projects</h5></div>

          <div className="projects_wrapper twelve columns">
            {this.renderProjects()}
          </div>

        </div>
        <div className="footer_wrapper container">
          <div className="footer">
            <strong>this website was written by James Sewell utilizing Reactjs and Skeleton CSS boilerplate. Source code for this website can be found <a href="https://github.com/jamesjsewell/jamesj">here</a></strong>
          </div>
        </div>

      
      </div>
    );
  }
}

export default App;



class Project extends Component{

  constructor(props){
    super(props)
  }

  render(){
    var {seeMore} = this.props
    var {name, title, description, video} = this.props.project
    return (
      <div className="project_wrapper">
        <p>{title}</p>
        <div className="image_bounds">
          <iframe className="u-max-full-width project_thumbnail" width="560" height="315" src={video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <button onClick={()=>{seeMore(this.props.project)}} type="button"><strong className="u-max-full-width">more</strong></button>
      </div>
    )
  }
}

class Modal extends Component{

  constructor(props){
    super(props)
    var theContext = this
    var repoUrl = `https://api.github.com/repos/jamesjsewell/${this.props.project.name}`
    fetch(repoUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(repojson) {
      var githubUrl = repojson.clone_url
      var homepage = repojson.homepage
      var description = repojson.description
      theContext.setState({githubUrl: githubUrl, homepage: homepage, description: description })
      console.log(theContext)
    });

  }
  
  render(){
    var {seeMore, closeModal, viewLive} = this.props
    var {name, title, video, source, site} = this.props.project
    if(this.state){
      var {description, githubUrl, homepage} = this.state
    }
   
    
    return ( 
    <div className="modal_wrapper">
        
      <div className="modal_content pulsing_anim">

        <div className="container close_modal_wrapper">
          <button className="close_modal" onClick={()=>{closeModal()}}>close</button>
        </div>

        <div className="container">
          
          {homepage? <div className="modal_header row"><div className="columns twelve"><h5><a onClick={()=>{viewLive()}} href={homepage}>{title} - live link</a></h5></div></div> : null}
          <div className="row">
            <div className="eight columns modal_image">
              <iframe className="u-max-full-width" width="560" height="315" src={video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>

            <div className="four columns modal_text">
              {githubUrl? <a className="view_source" href={githubUrl}><img src={github} /></a> : null}
              {description? <p>{description}</p> : null}
            </div>
          </div>
        </div>
      </div>
        
    </div> )
  }
}
