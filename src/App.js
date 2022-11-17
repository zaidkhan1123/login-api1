import React, { useEffect, useState } from 'react'
import axios from "axios"
import css from "./App.css"
import Modal from './Modal'
import Modal1 from './Modal1'
function App() {

  const [data,setdata]=useState("")
  const [check,setcheck]=useState('')
  const [match, setMatch]=useState(false);

useEffect(()=>{
  const url = 'https://jsonplaceholder.typicode.com/users' 
  axios.get(url).then((res)=>{
  if(res.data){
    const itemlist = res.data
    const arrayitem = itemlist.map((item)=>{
 return item.email
    })
    setcheck(arrayitem);
  }
  

 })
 console.log(check)

},[])



function handleclick (e){
  e.preventDefault()
//   const url = 'https://jsonplaceholder.typicode.com/users' 
//   axios.get(url).then((res)=>{
//   if(res.data){
//     const itemlist = res.data
//     const arrayitem = itemlist.map((item)=>{
//  return item.email
//     })
//     setcheck(arrayitem);
//   }
    

//  })
// console.log(check);
// console.log(data);
setMatch(false);
 for(let i = 0; i <= check.length; i++) {
  console.log(check[i])
    if(check[i] == data) {
      setMatch(true);
      console.log(match);
    }
 }

 
}





  return (
   

    <div>
     {match === true ? <Modal match={match} true={true} /> : <Modal1/> }
      <div className="login-root">
      
  <div
    className="box-root flex-flex flex-direction--column"
    style={{ minHeight: "100vh", flexGrow: 1 }}
  >
    <div className="loginbackground box-background--white padding-top--64">
      <div className="loginbackground-gridContainer">
        <div
          className="box-root flex-flex"
          style={{ gridArea: "top / start / 8 / end" }}
        >
          <div
            className="box-root"
            style={{
              backgroundImage:
                "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
              flexGrow: 1
            }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "4 / 2 / auto / 5" }}
        >
          <div
            className="box-root box-divider--light-all-2 animationLeftRight tans3s"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "6 / start / auto / 2" }}
        >
          <div
            className="box-root box-background--blue800"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "7 / start / auto / 4" }}
        >
          <div
            className="box-root box-background--blue animationLeftRight"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "8 / 4 / auto / 6" }}
        >
          <div
            className="box-root box-background--gray100 animationLeftRight tans3s"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "2 / 15 / auto / end" }}
        >
          <div
            className="box-root box-background--cyan200 animationRightLeft tans4s"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "3 / 14 / auto / end" }}
        >
          <div
            className="box-root box-background--blue animationRightLeft"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "4 / 17 / auto / 20" }}
        >
          <div
            className="box-root box-background--gray100 animationRightLeft tans4s"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "5 / 14 / auto / 17" }}
        >
          <div
            className="box-root box-divider--light-all-2 animationRightLeft tans3s"
            style={{ flexGrow: 1 }}
          />
        </div>
      </div>
    </div>
    <div
      className="box-root padding-top--24 flex-flex flex-direction--column"
      style={{ flexGrow: 1, zIndex: 9 }}
    >
      <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
        <h1>
          <a href="http://blog.stackfindover.com/" rel="dofollow">
            Login
          </a>
        </h1>
      </div>
      <div className="formbg-outer">
        <div className="formbg">
          <div className="formbg-inner padding-horizontal--48">
            <span className="padding-bottom--15">Sign in to your account</span>

            {/* <p className='loggedIn' style={match === true ? {display:'block'} : {display:'none'}}>Loggedin Successfully</p>
            <p className='notloggedIn' style={match === false && {display:'none'}}>Email or Password is incorrect</p> */}
            <form id="stripe-login">
              <div className="field padding-bottom--24">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e) => {
          setdata(e.target.value);
        }} />
              </div>
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label htmlFor="password">Password</label>
                  <div className="reset-pass">
                    <a href="#">Forgot your password?</a>
                  </div>
                </div>
                <input type="password" name="password" />
              </div>
              <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                <label htmlFor="checkbox">
                  <input type="checkbox" name="checkbox" /> Stay signed in for a
                  week
                </label>
              </div>
              <div className="field padding-bottom--24">
                <input type="submit" data-toggle="modal" data-target="#exampleModal" name="submit" htmlFor="stripe-login" defaultValue="Continue" onClick={handleclick} style={{background:"#F95E1C"}} />
              </div>
              <div className="field">
                <a className="ssolink" href="#">
                  Use single sign-on (Google) instead
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-link padding-top--24">
          <span>
            Don't have an account? <a href="">Sign up</a>
          </span>
          <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
            <span>
              <a href="#">© Stackfindover</a>
            </span>
            <span>
              <a href="#">Contact</a>
            </span>
            <span>
              <a href="#">Privacy &amp; terms</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    {/* <form id="form">
      <label htmlFor="fname">Email:</label>
      <br />
      <input
        type="email"
        id="fname"
        name="fname"
        onChange={(e) => {
          setdata(e.target.value);
        }}
      />
      <br />
      <label htmlFor="lname">Password</label>
      <br />
      <input type="password" id="lname" name="lname" defaultValue="Doe" />
      <br />
      <br />
      <input type="submit" htmlFor="form"  onClick={handleclick} />
    </form> */}
  </div>
 
  )
}

export default App
