import React, { useState } from 'react'

const questions = () => {
  const [QuesNo, setQuesNo] = useState(1)
  const [Ans, setAns] = useState(undefined)
  const [score, setscore] = useState(0)
  const [name, setname] = useState()
  const wrongAns = () => {
    setQuesNo(QuesNo = QuesNo + 1)
    setAns(Ans = false)
  }
  const correctAns = () => {
    setQuesNo(QuesNo = QuesNo + 1)
    setAns(Ans = true)
    setscore(score = score + 10)

  }
  return (
    <div>
      
      {QuesNo == 1 &&
        <div>
          <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl'>
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
          <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl'>
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
          <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl'>
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
          <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl'>
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
          <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl'>
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

      }            {QuesNo == 6 &&
        <div className='mx-auto mt-[22vh] bg-white shadow-xl w-10/12 p-10 rounded-2xl'>
          <h1 className='text-3xl font-bold mb-5'>All Done!</h1>
          <p className='font-medium my-3 text-md'>Your final score is {score}</p>
          <span>
            <span className='font-medium my-3 text-md'>Enter initials</span>
            <input className='mx-2 h-8' autoFocus onChange={(e) => setname(e.target.value)}></input>
            <button className='bg-emerald px-4 py-2 rounded-md text-white mt-2'> Submit</button>
          </span>
        </div>

      }
    </div>
  )
}

export default questions
