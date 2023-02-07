import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

export default function PlayScreen(props) {
    const userName = useRef(null);
    const subOpt = (e) => {
        e.preventDefault();
        props.setUserName(userName.current.value);
    }
    return (
        <>
            <div className="play_box">
                <div className="play_conatiner">
                    <div className='game_name'>
                        <h1>Snake Water Gun</h1>
                    </div>
                    <div>
                        <form action="" >
                            <div className="input_box">
                                <input onChange={subOpt} id='userInp' ref={userName} type="text" placeholder='ENTER YOUR NAME' />
                            </div>
                            <div className="start_btn">
                                <button>
                                    <Link to="/home">PLAY</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="info_hidden">
                <h2>Rotate Your Phone</h2>
                <span class="material-symbols-outlined">
                    screen_rotation
                </span>
            </div>
            {/* <HomeScreen  username = {userName} /> */}
        </>
    )
}
