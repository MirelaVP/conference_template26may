import "../App.css";
import React, { useState } from 'react'  

function Login() {
  let userId = document.querySelector('#userId');
	let userPw = document.querySelector('#userPw'); //아이디 중복 확인 버튼

	const [inputs, setInputs] = useState({  
        username: '',
        userPW: '',
    });

	const onChange = (e) => {
		const { name, value } = e.target  
		const nextInputs = { ...inputs,  [name]: value,}
		setInputs(nextInputs);      
    }

	function letsLogin() {
		if(inputs.userId===""){
			alert("Please enter your ID.");
			return;
		}else if(inputs.userPw==="false"){
			alert("Please enter your password");
			return;
		}else{
		   fetch("/login", { // enter the address you'd like to use
			   method: 'post',
			   headers: {
				   'content-type': 'application/json'
			   },
			   body : JSON.stringify({
					userId : inputs.username,
				   userPW : inputs.userPW
			   })
		   }).then(res => res.json())
			   .then(response => {
				console.log(response.Authorization);
				if(response.Authorization==null){
                    alert("Please check your ID and password.");
                }else{
                   alert("Authorized.");
				   	window.localStorage.setItem("Authorization", response.Authorization);
                    window.location.href="/home";
                }
			   });
		}
	}
    return (
	<div className="userLoginBox" >
		<div className="form-box login-register-form-element" id="userLoginBox_in">
			
			<h2 className="form-box-title">Log in</h2>
	
			<form className="form" id="loginFrm" >
				<div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="text" id="userId" name="username" placeholder="ID" onChange={onChange}/>
						</div>
					</div>
				</div>

				<div className="form-row">
					<div className="form-item">
						<div className="form-input">
							<input type="password" id="userPw" name="userPW" placeholder="Password" onChange={onChange}/>
						</div>
					</div>
				</div>

				
				<div className="form-row">
					<div className="form-item">
						<input type="button" className="button medium secondary" onClick={letsLogin} id="loginBtn"  value="Log in"/>
					</div>
				</div>
			</form>
		</div>
	</div>


  );
}

function Register() {
    return (
        <div>
            <Login/>
        </div>
    )
}

export default Register;