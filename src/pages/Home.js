import React, {useCallback, useMemo, useRef, useState} from 'react';
import Wrapper from "../components/Wrapper";
import {CSSTransition} from "react-transition-group";


const Home = () => {
    const [inPropMessage, setInPropMessage] = useState(false);
    const nodeRef = useRef(null);
    const buttonMessageRef = useRef(null);
    const handleShowMessage = useCallback(() => {
        setInPropMessage(!inPropMessage)
    }, [inPropMessage]);
    const timeControlsMessageBtn = useMemo(() => {
        return inPropMessage ? 100 : 1000
    }, [inPropMessage])
    return (
        <Wrapper helmetTitle={'Home'}>
            <section className={'home'}>
                <CSSTransition
                    in={!inPropMessage}
                    timeout={timeControlsMessageBtn}
                    classNames="button_message"
                    unmountOnExit
                >
                    <div ref={buttonMessageRef}>
                        <button
                            className={'btn_show_modal'}
                            onClick={handleShowMessage}
                        >
                            Show Massage
                        </button>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={inPropMessage}
                    timeout={400}
                    classNames="message_modal"
                    unmountOnExit
                >
                    <div
                        ref={nodeRef}
                        className={'content_message'}>
                        <h1>Animated alert message</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in</p>
                        <button
                            onClick={handleShowMessage}
                        >Close
                        </button>
                    </div>
                </CSSTransition>
            </section>
        </Wrapper>
    );
};

export default Home;