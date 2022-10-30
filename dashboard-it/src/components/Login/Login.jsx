import React,{ useState, useEffect, forwardRef } from "react";
import axios from 'axios';
import { useHistory,  } from 'react-router-dom';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const sleep = (delay = 0) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
}

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    
});
  
  
function RegisterDialog(props) {
    const { register_Check, onCloseDialogRegister, openDialogRegister, ...other } = props;

    const handleCancelRegisterDialog = () => {
        onCloseDialogRegister();
  
    };

    return (
       <Dialog
            fullScreen
            open={openDialogRegister}
            onClose={onCloseDialogRegister}
            TransitionComponent={Transition}
        >
            {/* <AppBar sx={{ overflowY: "overlay",  position: 'relative',backgroundImage:"linear-gradient(45deg, #f5f7fb 10%, #bbbbbb 70%)"}}> */}
            <AppBar sx={{ overflowY: "overlay",  position: 'relative',backgroundColor:"#cacaca", boxShadow:"none"}}>

                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleCancelRegisterDialog}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        ลงทะเบียนผู้ใช้ใหม่
                    </Typography>
                </Toolbar>

            </AppBar>

            <div className="box-dialog-content-form">
                <form onSubmit={register_Check} className="box form-content register-content">

                    <header >ข้อมูลผู้ใช้</header>

                    <div className="field mt-5">
                        <label className="label">รหัสพนักงาน / ID Emp</label>
                        <div className="controls validate-input">
                            <input type="text" className="input input100" placeholder="" name="idemp" autoFocus required/>
                            <span className="focus-input100"></span>
                        </div>
                    </div>

                    <div className="field mt-5">
                        <label className="label">ชื่อ / Frist Name</label>
                        <div className="controls validate-input">
                            <input type="text" className="input input100" placeholder="" name="fname" required />
                            <span className="focus-input100"></span>
                        </div>
                    </div>

                    <div className="field mt-5">
                        <label className="label">สกุล / Last Name</label>
                        <div className="controls validate-input">
                            <input type="text" className="input input100" placeholder="" name="lname" required />
                            <span className="focus-input100"></span>
                        </div>
                    </div>

                    {/* <div className="field mt-5">
                        <label className="label">ส่วนงาน / Section</label>
                        <div className="controls validate-input">
                            <input type="text" className="input input100" placeholder="" name="sec" required />
                            <span className="focus-input100"></span>
                        </div>
                    </div> */}

                    <div className="field mt-5">
                        <label className="label">อีเมลล์ / Email</label>
                        <div className="controls validate-input">
                            <input type="email" className="input input100" placeholder="" name="mail"  />
                            <span className="focus-input100"></span>
                        </div>
                    </div>

                    <div className="field mt-5">
                        <label className="label">ตั้งรหัสผ่านเข้าใช้งาน / Password</label>
                        <div className="controls validate-input">
                            <input type="password" className="input input100" placeholder="" name="pass" required />
                            <span className="focus-input100"></span>
                        </div>
                    </div>

                    <div className="field mt-5">
                        <label className="label">ยืนยันรหัสผ่านเข้าใช้งาน / Confirm Password</label>
                        <div className="controls validate-input">
                            <input type="password" className="input input100" placeholder="" name="cfpass" required />
                            <span className="focus-input100"></span>
                        </div>
                    </div>
                
                    <div className="field mt-5">
                        <div className="button">
                            <Button 
                                type="submit"
                                // variant={"text"}
                                sx={{ pt: 1 , px: 2}}
                                >
                                ขอสิทธ์ใช้งาน
                            </Button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </Dialog>
    );
}

const Login = () => {

    const [openDialogRegister, setOpenDialogRegister] = useState(false);

    const handleDialogRegister = () => {
        setOpenDialogRegister(true);

    };
    
    const handleCloseDialogRegister = () => {
        setOpenDialogRegister(false);

    };

    useEffect(() => {

        const refreshToken = async () => {
        
            try {
                await axios.get('http://localhost:5000/token',).then((res) => {})
                history.push("/it-service/it-support/");
            } catch (error) {
                // if (error.response) {
                //     history.push("/login");
                // }
            }
        }
    
        refreshToken();
        // getUsers();
    }, []);

    const [msg, setMsg] = useState('');
    const history = useHistory();

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    
    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    useEffect(() => {
        const handleSubmit = async() => {
            if(msg !== ''){
                setState(state => ({ state, ...{ open: true,vertical: "top", horizontal: "center"} }));
                await sleep(1e3);
                setState(state => ({ ...state, open: false }));
                setMsg('');
            }
        };

        handleSubmit();

    },[msg]);



    const Auth = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        try {
             await axios.post('http://localhost:5000/login', {
                name: data.get('login_name'),
                password: data.get('login_password')
            });
            
            history.push("/it-service/it-support/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            } 
        }

    }

    const Register_Check = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
    

    }

    useEffect(() => {
        const  pswrdField = document.querySelector(".form-login input[type='password']"),toggleBtn = document.querySelector(".form-login .field i");
            // toggleBtn2 = document.querySelector("header nav .user p");
        toggleBtn.onclick=()=>{
            if(pswrdField.type === "password"){
                pswrdField.type = "text";
                toggleBtn.classList.add("active");
            }else{
                pswrdField.type = "password"
                toggleBtn.classList.remove("active");
            }
        }
    });

    // useEffect(() => {
    //     handleClick({
    //         vertical: "top",
    //         horizontal: "center"
    //     });
    // }, [msg]);

    return (
        <section className="box-content-center">
           
            <div className="box-s-l">
                {/* <div className="form-login-bg"></div> */}
                <div className="form-login">
                    <form onSubmit={Auth} className="box form-content">
                        {
                            <Snackbar
                              anchorOrigin={{ vertical, horizontal }}
                              open={open}
                              onClose={handleClose}
                              message={msg}
                              key={vertical + horizontal}
                            />
                        }

                        {/* <p className="has-text-centered">{msg}</p> */}
                        {/* onChange={(e) => setPassword(e.target.value)} */}

                        <header >IT SERVICE</header>
                        
                        <div className="field mt-5">
                            <label className="label">User</label>
                            <div className="controls validate-input">
                                <input type="text" className="input input100" placeholder="ID User" name="login_name" autoFocus />
                                <span className="focus-input100"></span>
                            </div>
                        </div>
                        
                        <div className="field mt-5">
                            <label className="label">Password</label>
                            <div className="controls validate-input">
                                <input type="password" className="input input100" placeholder="∘∘∘∘∘∘∘∘" name="login_password"/>
                                <span className="focus-input100"></span>
                                <i className="fas fa-eye"></i>
                            </div>
                        </div>

                        <div className="field mt-5">
                            {/* <button className="button">Login</button> */}
                            <div className="button">
                                <Button 
                                    // onClick={Auth} 
                                    type="submit"
                                    variant={"text"}
                                    // color={"inherit"}

                                    // onClick={()=>handleSubmit()}

                                    // onClick={handleSubmit({
                                    //     open: true,
                                    //     vertical: "top",
                                    //     horizontal: "center"
                                    //  })}
                                    sx={{ pt: 1 , px: 2}}
                                    >
                                    Log in
                                </Button>
                            </div>
                        </div>
                        {/* linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%) */}
                    </form>
                </div>
                <div className="box-register">

                   { 
                        <RegisterDialog
                            id="ringtone-menu"
                            keepMounted
                            openDialogRegister={openDialogRegister}
                            onCloseDialogRegister={handleCloseDialogRegister}
                            register_Check={Register_Check}
                        />
                    }

                    <div className="button">
                        <Button 
                            onClick={handleDialogRegister} 
                            variant={"text"}
                            sx={{ pt: 1 , px: 2}}
                        >
                            ลงทะเบียนผู้ใช้ใหม่
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
