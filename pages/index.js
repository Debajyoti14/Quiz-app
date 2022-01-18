import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {

  const [QuesNo, setQuesNo] = useState(1)
  const [step, setstep] = useState(0)
  const [Highscore, setHighscore] = useState(false)
  const [scorecard, setscorecard] = useState([])
  const [Ans, setAns] = useState(undefined)
  const [score, setscore] = useState(0)
  const [name, setname] = useState()
  const [sec, setsec] = useState(50000)
  const [wrong, setwrong] = useState(false)
  const [timer, settimer] = useState(false)

  //Clear High Scores
  const handleClearHighScore = () => {
    setscorecard([]);
  };
  //Proceed to further steps as components are rendered according to steps
  const proceed = () => {
    setstep(step = step + 1)
  }
  //Function to show highscore
  const showHighscore = () => {
    setHighscore(Highscore = true)
    setstep(step = undefined)
    settimer(false);
    setsec(50000);
    setscore(score=0)
  }
  //Going back to home screen
  const goback = () => {
    setHighscore(Highscore = false)
    setstep(step = 0)
    setQuesNo(QuesNo = 1)
  }
  //for pressing wrong ans
  const wrongAns = () => {
    setQuesNo(QuesNo = QuesNo + 1)
    setAns(Ans = false)
    setwrong(true)
    setTimeout(() => {setAns(undefined)},1000)
  }
  //for pressing correct ans
  const correctAns = () => {
    setQuesNo(QuesNo = QuesNo + 1)
    setAns(Ans = true)
    setscore(score = score + 10)
    setTimeout(() => {setAns(undefined)},1000)
  }
  //for starting timer when to start answering
  const handleTimerStart = () => {
    settimer(true);
  };

  //logic for the Timer
  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setsec((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (!timer) {
      clearInterval(interval);
    }

    if (wrong) {
      setsec((prevTime) => prevTime - 10000);
      setwrong(false);
    }
    return () => clearInterval(interval);
  }, [timer, wrong]);

  //When timer hits 0 or all the answers is answered
  useEffect(() => {
    if (sec <= 0 || QuesNo > 5) {
      setTimeout(() => {
        settimer(false);
        setsec(50000);
      }, 900);
      setQuesNo(6)
    }
  }, [sec, QuesNo]);

  //Injecting score and name into an array while submitting
  const onsubmit = () => {

    var scoreobj = {
      name: name,
      score: score
    }
    scorecard.push(scoreobj)
    setHighscore(true)
    setQuesNo(undefined)
    setscore(score=0)
  }


  return (
    <div>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
      </Head>
      {/* Navbar */}
      <header className="bg-emerald text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
            <span className="ml-3 text-xl cursor-pointer" onClick={showHighscore}>View Highscores<i className="ml-2 fas fa-hand-point-left fa-lg"></i></span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <p className="mr-5 hover:text-gray-900" >Time: 00:{sec / 1000}</p>
          </nav>
        </div>
      </header>
      {/* Navbar ends*/}
      {step == 0 &&
        <div className='mx-auto mt-[22vh] bg-white shadow-xl w-8/12 p-10 rounded-2xl cursor-pointer'>
          <h1 className='text-3xl font-bold mb-5'>Coding Quiz Challenge</h1>
          <p className='font-medium my-3 text-md'>Try to answer the following code-related questions within the time limit.</p>
          <p className='font-medium my-3 text-md'>Keep in mind that incorrect answers will penalize your your score/time by ten seconds!</p>
          <button className='bg-emerald px-4 py-2 rounded-md text-white mt-2' onClick={() => { proceed(); handleTimerStart() }}> Start Quiz</button>
        </div>
      }
      {step == 1 &&
        <div>

          {QuesNo == 1 &&
            <div>
              <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl cursor-pointer'>
                <h1 className='text-3xl font-bold mb-5'>Commonly used data types DO NOT include: </h1>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>1. Strings</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>2. booleans</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={correctAns}><p className='font-medium text-md ml-1'>3. alerts</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>4. numbers</p></div>
                {Ans == true &&
                  <h1>Correct Answer</h1>
                }
                {Ans == false &&
                  <h1>Wrong Answer</h1>
                }
                {Ans == undefined &&
                  <h1></h1>
                }
              </div>
            </div>

          }
          {QuesNo == 2 &&
            <div>
              <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl cursor-pointer'>
                <h1 className='text-3xl font-bold mb-5'>Arrays in javascript can be used to store: </h1>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={correctAns}><p className='font-medium text-md ml-1'>1. Number & Strings</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>2. Other Arrays</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>3. booleans</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>4. All of the above</p></div>
                {Ans == true &&
                  <h1>Correct Answer</h1>
                }
                {Ans == false &&
                  <h1>Wrong Answer</h1>
                }
                {Ans == undefined &&
                  <h1></h1>
                }
              </div>
            </div>

          }
          {QuesNo == 3 &&
            <div>
              <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl cursor-pointer'>
                <h1 className='text-3xl font-bold mb-5'>What is the size of an int data type? </h1>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>1. 4 Bytes</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>2. 8 Bytes</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={correctAns}><p className='font-medium text-md ml-1'>3. Depends on the system/compiler</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>4. Cannot be determined.</p></div>
                {Ans == true &&
                  <h1>Correct Answer</h1>
                }
                {Ans == false &&
                  <h1>Wrong Answer</h1>
                }
                {Ans == undefined &&
                  <h1></h1>
                }
              </div>
            </div>

          }
          {QuesNo == 4 &&
            <div>
              <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl cursor-pointer'>
                <h1 className='text-3xl font-bold mb-5'>Which of the datatypes have size that is variable? </h1>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>1. int</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={correctAns}><p className='font-medium text-md ml-1'>2. struct</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>3. float</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>4. double</p></div>
                {Ans == true &&
                  <h1>Correct Answer</h1>
                }
                {Ans == false &&
                  <h1>Wrong Answer</h1>
                }
                {Ans == undefined &&
                  <h1></h1>
                }
              </div>

            </div>

          }
          {QuesNo == 5 &&
            <div>
              <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl cursor-pointer'>
                <h1 className='text-3xl font-bold mb-5'>A standardized language used for commercial applications. </h1>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={correctAns}><p className='font-medium text-md ml-1'>1. C</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>2. Java</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>3. COBOL</p></div>
                <div className='p-2 rounded-md text-white bg-emerald my-2' onClick={wrongAns}><p className='font-medium text-md ml-1'>4. FORTRAN</p></div>
                {Ans == true &&
                  <h1>Correct Answer</h1>
                }
                {Ans == false &&
                  <h1>Wrong Answer</h1>
                }
                {Ans == undefined &&
                  <h1></h1>
                }
              </div>

            </div>
            //Scorecard 
          }            {QuesNo == 6 &&
            <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl cursor-pointer'>
              <h1 className='text-3xl font-bold mb-5'>All Done!</h1>
              <p className='font-medium my-3 text-md'>Your final score is {score}</p>
              <span>
                <span className='font-medium my-3 text-md'>Enter initials</span>
                <input className='mx-2 h-8' autoFocus onChange={(e) => setname(e.target.value)}></input>
                <button className={(name) ? 'bg-emerald px-4 py-2 rounded-md text-white mt-2' : "cursor-not-allowed px-4 py-2 rounded-md bg-gray"} onClick={onsubmit}> Submit</button>
              </span>
            </div>

          }
        </div>
        //HIghscore
      }
      {Highscore == true &&
        <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl cursor-pointer'>
          <h1 className='text-3xl font-bold mb-5'>Highscores</h1>
          {scorecard.map((list, index) => {
            return (
              <p key={list.name}>{index + 1}. {list.name} - {list.score}</p>
            )
          })}
          <div className='mt-3'>
            <button className='bg-emerald px-4 py-2 rounded-md text-white mt-2 mr-2' onClick={goback}> Go back</button>
            <button className='bg-emerald px-4 py-2 rounded-md text-white mt-2 ml-0 sm:ml-2' onClick={handleClearHighScore}> Clear Highscores</button>
          </div>
        </div>

      }
    </div>
  )
}
