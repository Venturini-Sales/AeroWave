import React, {useState} from 'react';
import './My_Account.css'
import { toast } from 'react-toastify';
import Container from "../../components/container/Container";
import  Modal  from '../../components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/button/Button';


export const MyAccount = () => {

    const { signout, user } = useAuth(); 
    const navigate = useNavigate();

    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");


    const openLogoutModal = () => {
        setShowLogoutModal(true);
    };

    const closeLogoutModal = () => {
        setShowLogoutModal(false);
    };

    const saveChanges = () => {
        const storedUsers = JSON.parse(localStorage.getItem("users_db"));
        const storedUser = storedUsers.find(u => u.email === user.email);
        
        
        if (!storedUser || storedUser.password !== currentPassword) {
            toast.error("Incorrect current password.");
            return;
        }
    
        if (newPassword !== confirmNewPassword) {
            toast.error("The new password and confirmation do not match.");
            return;
        }
    
        const updatedUsers = storedUsers.map(u => {
            if (u.email === user.email) {
                return { ...u, password: newPassword };
            }
            return u;
        });
    
    
        localStorage.setItem("users_db", JSON.stringify(updatedUsers));
    
        toast.success("Password updated successfully.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    };

    return (
        

        <div className='myAccount'>

            <Container path="C:\My Account">  

            <div className='accountArea'>
                <h1>Account Details</h1>
                <div className='contentArea'>
                    <div className='contentLeft'>
                        <ul>
                            <li>Account Details</li>
                            <li onClick={openLogoutModal}>Logout</li>
                        </ul>
                    </div>
                    <div className='contentRight'>

                        <div className='detailsArea'>
                            <div className='infoArea'>
                                <div className='inputArea'>
                                    <div style={{marginBottom: 2}}>Email</div>
                                    <div style={{textTransform: 'lowercase', border: '1px solid gray', padding: '9px 12px', borderRadius: '5px', overflow: 'hidden', cursor:'not-allowed'}}>{user.email}</div>
                                </div>
                            </div>

                            <div className='infoArea'>
                                <div className='inputArea'>
                                    <div>Password</div>
                                    <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
                                </div>
                            </div>

                            <div className='infoArea'>
                                <div className='inputArea'>
                                    <div>New password</div>
                                    <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                                </div>
                            </div>

                            <div className='infoArea'>
                                <div className='inputArea'>
                                    <div>Confirm new password</div>
                                    <input type="password" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
                                </div>
                            </div>

                            <div className='infoArea'>
                                <Button onClick={saveChanges} type='Save editions' />
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>

            <Modal path="C:\Logout" isOpen={showLogoutModal} onClose={closeLogoutModal}>
                <div className='logoutArea'>
                    <p>Are you sure you want to log out?</p>
                    <div className='buttonsArea'>
                        <button className='buttonSend' onClick={closeLogoutModal}>Cancel</button>
                        <button className='buttonSend' onClick={() => [signout(), navigate("/")]}>Confirm</button>
                    </div>
                </div>
            </Modal>
        
           

            </Container>
            
        </div>
    )
}

export default MyAccount