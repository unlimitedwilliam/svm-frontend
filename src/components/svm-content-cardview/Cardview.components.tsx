import React, { useRef, useState } from 'react';
import './Cardview.scss';
import TextField from './components/fields/TextField';
import Logo from './components/logo/Logo'; 
import { MdCheck } from 'react-icons/md';
import CustomCheckBox from './components/authority/CustomCheckBox';

const Cardview = () => {
    const [initState, setInitState] = useState({
        name: '', 
        email: '', 
        password: '',
        address: '', 
        fullName: '', 
        note: '', 
        phoneNum: '',
        authority: '',
        logo: ''
      });
    
      const nameRef = useRef();
      const emailRef = useRef();
      const passwordRef = useRef();
      const addressRef = useRef();
      const fullNameRef = useRef();
      const noteRef = useRef();
      const phoneNumRef = useRef();

      const adminRef = useRef(); 
      const controlRef = useRef(); 
      const fillRef = useRef();

      const logoRef = useRef();
    
    const saveInfo = () => {
        setInitState({
            name: (nameRef.current as any).returnText(), 
            email: (emailRef.current as any).returnText(), 
            password: (passwordRef.current as any).returnText(),
            address: (addressRef.current as any).returnText(), 
            fullName: (fullNameRef.current as any).returnText(), 
            note: (noteRef.current as any).returnText(), 
            phoneNum: (phoneNumRef.current as any).returnText(),
            authority: (adminRef.current as any).returnChecked() + (controlRef.current as any).returnChecked() + (fillRef.current as any).returnChecked(),
            logo: (logoRef.current as any).returnLogo()
        })
    };
    
    const cancelChange = () => {
        setInitState({
            name: (nameRef.current as any).resetText(), 
            email: (emailRef.current as any).resetText(), 
            password: (passwordRef.current as any).resetText(),
            address: (addressRef.current as any).resetText(), 
            fullName: (fullNameRef.current as any).resetText(), 
            note: (noteRef.current as any).resetText(), 
            phoneNum: (phoneNumRef.current as any).resetText(),
            authority: (adminRef.current as any).resetChecked() + (controlRef.current as any).resetChecked() + (fillRef.current as any).resetChecked(),
            logo: (logoRef.current as any).resetLogo(),
        });        
    };

    console.log(initState);
    
  return (
    <div className='cardview'>
        <div className="cardview__title">
            Thông tin tài khoản
        </div>
        <div className="cardview__body">
            <div className="cardview__body__left">
                <Logo ref={logoRef}/>
            </div>
            <div className="cardview__body__right">
                <TextField label='Tên đăng nhập' ref={nameRef} />        
                <TextField label='Email' ref={emailRef}/>
                <TextField label='Mật khẩu' password = {true} ref={passwordRef}/>
                <TextField label='Địa chỉ' ref={addressRef}/>
                <TextField label='Họ và Tên' ref={fullNameRef}/>
                <TextField label='Ghi chú' ref={noteRef}/>
                <TextField label='SĐT' ref={phoneNumRef}/>
            </div>
        </div>
        <div className="cardview__authority">
            <div className="cardview__authority__title">
                Phân quyền 
            </div>
            <div className="group-radio">
                <CustomCheckBox label='Admin' ref={adminRef}/>
                <CustomCheckBox label='Kiểm soát' ref={controlRef}/>
                <CustomCheckBox label='Fill hàng' ref={fillRef}/>
            </div>
        </div>
        <div className="cardview__footer">
            <button className='cardview__footer__cancel' onClick={(e: any) => cancelChange()}>Hủy thay đổi</button>
            <button className='cardview__footer__save' onClick={(e: any) => saveInfo()}>
                <MdCheck size={'20px'}/>
                Lưu lại
            </button>
        </div>
    </div>
  )
}

export default Cardview