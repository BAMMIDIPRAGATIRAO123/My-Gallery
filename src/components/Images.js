import './Images.css';
import React, { Component } from 'react';
import video1 from "./compilecompanion.mov";
import video2 from './my restaurant.mov';
import video3 from './include.mov';
import video4 from './cavideo.mov';
import video5 from './G-Quiz-Web.mov';
import video6 from './G-Quiz-Mobile.mov'
import profile from './profile.jpg';

export class Images extends Component {
    constructor(props){
        super(props)
        this.state={
            ImageUrl:'',
            ImageUrlArray:[
                "portfolio/my-react-gallery/public/images/camainpage.jpg","portfolio/my-react-gallery/public/images/includehomepage.jpg","portfolio/my-react-gallery/public/images/includemenu.jpg","portfolio/my-react-gallery/public/images/includeprofile.jpg",
                "portfolio/my-react-gallery/public/images/landingca.jpg","portfolio/my-react-gallery/public/images/landinginclude.jpg", "portfolio/my-react-gallery/public/images/playgroundinclude.jpg","portfolio/my-react-gallery/public/images/programca.jpg",
                "portfolio/my-react-gallery/public/images/programinclude.jpg","portfolio/my-react-gallery/public/images/setprofileca.jpg","portfolio/my-react-gallery/public/images/signinca.jpg","portfolio/my-react-gallery/public/images/signupca.jpg"
            ],
            showModal:false,
            popImageUrl:''
        }
    }

    render() {
        return (
            <div>
                <div className="headimage">
                    <p className="lead">BAMMIDI PRAGATI RAO</p>
                    <p className="sub">Full Stack Web Developer</p>
                    <i className="subhead">React-Project-Gallery</i>
                    <img className="profile" src={profile} alt=""></img>
                    <p className="matter-1">I am currently a 2nd year student at Sri Sairam College of Engineering Bangalore and pursuing my B.Tech from here. I am a self taught Full Stack Web Developer, currently diving deeper into it. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.</p>
                </div>
                <h1 className="title">
                    These are glimps of some of the projects i was part of.
                </h1>
                <form onChange={this.imageSubmitter}>
                    <h2 className="Projectname">HASHINCLUDE(#INCLUDE)</h2>
                    <p className="matter">HASHINCLUDE- it is a Mobile Application using the Flutter plugin of Android Studio, Firebase for the backend, and Figma for the designing. #include application consists of a compiler, a discussion forum, a List of programs page and, YouTube tutorials for better understandingOur main objective is to make programming easier for students/(new) developers who are getting started with it.</p>
                    <div className="container">
                    {/* <video className="Projectvideo" src={video3} controls="controls" autoPlay={false}></video> */}
                    </div>
                    <h2 className="Projectname">COMPILE COMPANION</h2>
                    <p className="matter">COMPILE_COMPANION- Compile companion is a single stop platform for all the programming labs of each semester in VTU that consists of  basic to advanced level programs uploaded by trained faculties of the institute. It allows the faculties to upload, update , delete and execute their codes in the compiler section. Its uncomplicated design makes it easy to use.</p>
                    <div className="container">
                        {/* <video className="Projectvideo" src={video1} controls="controls" autoPlay={false}></video> */}
                    </div>
                    <h2 className="Projectname">COMPILE ANYWHERE</h2>
                    <p className="matter">COMPILE_ANYWHERE- CompileAnywhwere is a mobile application using flutter framework which supports compile companion and provides a platform for all the students/beginners to make a step forward towards learning by promoting self-study.</p>
                    <div className="container">
                    {/* <video className="Projectvideo" src={video4} controls="controls" autoPlay={false}></video> */}
                    </div>
                    <h2 className="Projectname">G-QUIZ WEB</h2>
                    <p className="matter">G-QUIZ WEB- G-Quiz web application is one stop solution for students as well as new developers for indepth learning in most organised manner which includes short demo video, youtube tutorial course links and free material with quiz section for each and every topic.</p>
                    <div className="container">
                        {/* <video className="Projectvideo" src={video5} controls="controls" autoPlay={false}></video> */}
                    </div>
                    <h2 className="Projectname">G-QUIZ MOBILE</h2>
                    <p className="matter">G-QUIZ MOBILE- G-Quiz mobile application is one stop solution for students as well as new developers for indepth learning in most organised manner which includes youtube tutorial course links and free material with quiz section for each and every topic.</p>
                    <div className="container">
                        {/* <video className="Projectvideo" src={video6} controls="controls" autoPlay={false}></video> */}
                    </div>
                    <h2 className="Projectname">K-10</h2>
                    <p className="matter">K-10 - K-10 is a restaurant web application which is a complete place for a foodie to fulfill his cravings. People often gets confused while ordering somethinng, this platform will help you to pick the best cuisine that one desire and its specialities in a specified manner!!.</p>
                    <div className="container">
                        {/* <video className="Projectvideo" src={video2} controls="controls" autoPlay={false}></video> */}
                    </div>
                    <div className="foot">
                        THANKYOU FOR VISITING !!!!
                    </div>
                </form>
            </div>
        )
    }
}

export default Images
