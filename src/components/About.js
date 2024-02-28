import React from 'react'

export default function About(props) {
       const myStyle ={
            color : props.mode === 'light' ? 'dark' : 'light',
            backgroundColor : props.mode === 'dark' ? 'light' : 'dark',
       }
    // const { myStyle, newStyle } = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '2px solid black'
    // })
    // const { btnText, setBtnText } = useState("Enable Dark Mode")

    // const darkStyle = () => {
    //     if (myStyle.color === 'black') {
    //         newStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    //     else {
    //         newStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '2px solid black'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }
    // internal css in js or react:-
    // let myStyle = {
    //     color : 'white',
    //     backgroundColor : 'black',
    // }

    return (
        <>
            <div className='container' style={myStyle}>
                <h1 className='my-5'>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" >
                            <button style={{border : '2px solid white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <div>Summary</div>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              Textutils will assist you in your daily life by helping and guiding you in changing the format of your text from converting uppercase to lowercase, lowercase to uppercase, clearing text, checking extra spaces to formatting abusing words.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button style={{border : '2px solid white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <div>Free to Use</div>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            It is absolutely fun and free to use.
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button style={{border : '2px solid white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <div>Connect with Us</div>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               Email us- react.reactapp@gmail.com.
                               <br />
                               Phone number - +91-**********, +91-********** .
                               <br />
                               Address - Techvalley, sigma crossing road, los angeles.
                               <br />
                               Customer care - +91- **********.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
