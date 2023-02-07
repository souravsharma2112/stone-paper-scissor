import React, { useState } from "react";
import { Link } from 'react-router-dom';
import scissor from "../image/Scissor2.mp4";
import stone from "../image/Stone.mp4";
import paper from "../image/Paper.mp4";
import option1 from '../image/stone1.png'
import option2 from '../image/paper.jpg'
import option3 from '../image/scissor.png'
export default function HomeScreen(props) {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [compCard, setCompCard] = useState(0);
  const [winResult, setWinResult] = useState("");
  const [winner, setWinner] = useState("");

  const addAnimation = () => {
    let ranNo = Math.random() * 3;
    let random = Math.floor(ranNo);
    let userCard = document.getElementById("userCard");
    let compCard = document.getElementById("compCard");
    let userOpt1 = document.getElementById("userOpt1");
    let userOpt2 = document.getElementById("userOpt2");
    let userOpt3 = document.getElementById("userOpt3");
    let compOpt1 = document.getElementById("compOpt1");
    let compOpt2 = document.getElementById("compOpt2");
    let compOpt3 = document.getElementById("compOpt3");
    userOpt1.classList.add("hidden");
    userOpt2.classList.add("hidden");
    userOpt3.classList.add("hidden");
    compOpt1.classList.add("hidden");
    compOpt2.classList.add("hidden");
    compOpt3.classList.add("hidden");
    userCard.classList.add("animation");
    compCard.classList.add("animation");
    setCompCard(random);
  }

  const removeAnimation = () => {
    let userCard = document.getElementById("userCard");
    let compCard = document.getElementById("compCard");
    let userOpt1 = document.getElementById("userOpt1");
    let userOpt2 = document.getElementById("userOpt2");
    let userOpt3 = document.getElementById("userOpt3");
    let compOpt1 = document.getElementById("compOpt1");
    let compOpt2 = document.getElementById("compOpt2");
    let compOpt3 = document.getElementById("compOpt3");
    compOpt1.classList.remove("hidden");
    compOpt2.classList.remove("hidden");
    compOpt3.classList.remove("hidden");
    userOpt1.classList.remove("hidden");
    userOpt2.classList.remove("hidden");
    userOpt3.classList.remove("hidden");
    userCard.classList.remove("animation");
    compCard.classList.remove("animation");
    disComment()
  }
  const disComment = () => {
    let comment = document.getElementById("comment");
    comment.classList.remove("hidden");
    setTimeout(() => {
      comment.classList.add("hidden");
      let userCardChild = document.getElementById("userCard").children;
      let compCardChild = document.getElementById("compCard").children;
      compCardChild[0].classList.add("hidden");
      compCardChild[2].classList.add("hidden");
      compCardChild[1].classList.add("hidden");
      userCardChild[2].classList.add("hidden");
      userCardChild[0].classList.add("hidden");
      userCardChild[1].classList.add("hidden");
    }, 800);
  }

  const disCompCard = () => {

    if (compCard === 0) {
      let compCardChild = document.getElementById("compCard").children;
      compCardChild[0].classList.remove("hidden");
      compCardChild[2].classList.add("hidden");
      compCardChild[1].classList.add("hidden");
    }
    if (compCard === 1) {
      let compCardChild = document.getElementById("compCard").children;
      compCardChild[0].classList.add("hidden");
      compCardChild[2].classList.add("hidden");
      compCardChild[1].classList.remove("hidden");
    }
    if (compCard === 2) {
      let compCardChild = document.getElementById("compCard").children;
      compCardChild[0].classList.add("hidden");
      compCardChild[2].classList.remove("hidden");
      compCardChild[1].classList.add("hidden");
    }

  }

  const optionClick1 = () => {
    let btn1 = 0;
    let userCardChild = document.getElementById("userCard").children;
    userCardChild[0].classList.remove("hidden");
    userCardChild[1].classList.add("hidden");
    userCardChild[2].classList.add("hidden");
    displayResult()
    disCompCard()
    addAnimation();
    setTimeout(() => {
      removeAnimation();
    }, 1000);
    if (btn1 === compCard) {
      setWinResult("TIE!")
    }
    if (compCard === 1) {
      setWinResult("LOSE!")
      setCompScore(compScore + 10);
    }
    if (compCard === 2) {
      setWinResult("WIN!")
      setUserScore(userScore + 10);
    }

  }

  const optionClick2 = () => {
    let btn2 = 1;
    let userCardChild = document.getElementById("userCard").children;
    userCardChild[1].classList.remove("hidden");
    userCardChild[0].classList.add("hidden");
    userCardChild[2].classList.add("hidden");
    displayResult()
    disCompCard()
    addAnimation();
    setTimeout(() => {
      removeAnimation();
    }, 1000);

    if (btn2 === compCard) {
      setWinResult("TIE!")
    }
    if (compCard === 0) {
      setWinResult("WIN!")
      setUserScore(userScore + 10);
    }
    if (compCard === 2) {
      setWinResult("LOSE!")
      setCompScore(compScore + 10);
    }


  }
  const optionClick3 = () => {
    let btn3 = 2;
    let userCardChild = document.getElementById("userCard").children;
    userCardChild[2].classList.remove("hidden");
    userCardChild[1].classList.add("hidden");
    userCardChild[0].classList.add("hidden");
    displayResult()
    disCompCard()
    addAnimation();
    setTimeout(() => {
      removeAnimation();
    }, 1000);
    if (btn3 === compCard) {
      setWinResult("TIE!")
    }
    if (compCard === 0) {
      setWinResult("LOSE!")
      setCompScore(compScore + 10);
    }
    if (compCard === 1) {
      setWinResult("WIN!")
      setUserScore(userScore + 10);
    }


  }
  let displayResult = () => {
    let winner = document.getElementById("winner");
    let comment = document.getElementById("comment");
    if (userScore === 10) {
      comment.classList.add("hidden");
      setWinner(`Hurry! You Win...${props.userName} Score ${userScore}`)
      setWinResult("")
      setCompScore(0);
      setUserScore(0);
      winner.classList.remove("hidden")
    }
    if (compScore === 10) {
      comment.classList.add("hidden");
      setWinner(`Oops! You Lose...${props.userName} Score ${userScore}`)
      setWinResult("");
      setCompScore(0);
      setUserScore(0);
      winner.classList.remove("hidden")
    }
  }



  return (
    <>
      <section className="section_container">
        <div className="display">
          <div className="comp_display d_child">
            <div className="left_display f_l1">
              <div className="user_info">
                <h1>
                  <strong>Computer</strong>
                </h1>
              </div>
              <div className="user_score">
                <h1>
                  <strong>{compScore}</strong>
                </h1>
              </div>
            </div>
          </div>
          <div className="user_display d_child">
            <div className="right_display f_l1">
              <div className="user_score">
                <h1>
                  <strong>{userScore}</strong>
                </h1>
              </div>
              <div className="user_info">
                <h1>
                  <strong>{props.userName}</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="card_container">
          <div className="card_box comp_box">
            <div id="compCard" className="card_left card">
              <video className="hidden" loop muted autoPlay="autoplay">
                <source src={stone} type="video/mp4" />
              </video>
              <video className="hidden" loop muted autoPlay="autoplay">
                <source src={paper} type="video/mp4" />
              </video>
              <video className="hidden" loop muted autoPlay="autoplay">
                <source src={scissor} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="numberCounter">
            {/* <h1><strong><em>1</em></strong></h1> */}
            <h1 id='comment' className="hidden"><strong><em>{winResult}</em></strong></h1>
            <div id="winner" className="winner hidden">
              <h1 id='comment2' className=""><strong><em>{winner}</em></strong></h1>
              <button><Link to="/"><span class="material-symbols-outlined">
                arrow_back
              </span></Link></button>
            </div>

            {/* <h1 id='timer' className=""><strong><em>{userCard}</em></strong></h1> */}
          </div>
          <div className="card_box user_box">
            <div id="userCard" className="card_right card">
              <video className="hidden" loop muted autoPlay="autoplay">
                <source src={stone} type="video/mp4" />
              </video>
              <video className="hidden" loop muted autoPlay="autoplay">
                <source src={paper} type="video/mp4" />
              </video>
              <video className="hidden" loop muted autoPlay="autoplay">
                <source src={scissor} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="card_option_box ">
          <div className="card_option comp_opt">
            <div className="option_card">
              <button id='compOpt1' className="options optBtn"><img src={option1} alt="hello" srcSet='' /></button>
              <button id='compOpt2' className="options optBtn" ><img src={option2} alt="hello" srcSet='' /></button>
              <button id='compOpt3' className="options optBtn" ><img src={option3} alt="hello" srcSet='' /></button>
            </div>
          </div>
          <div className="card_option">
            <div className="option_card user_opt">
              <button id='userOpt1' onClick={optionClick1} className="options optBtn"><img src={option1} alt="hello" srcSet='' /></button>
              <button id='userOpt2' onClick={optionClick2} className="options optBtn" ><img src={option2} alt="hello" srcSet='' /></button>
              <button id='userOpt3' onClick={optionClick3} className="options optBtn" ><img src={option3} alt="hello" srcSet='' /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
