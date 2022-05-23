import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, Form, Input } from 'antd';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClq1L7bB7hHYLh3tRiPKnLLqA5PRM4FLQ",
  authDomain: "my-first-firestore-na.firebaseapp.com",
  projectId: "my-first-firestore-na",
  storageBucket: "my-first-firestore-na.appspot.com",
  messagingSenderId: "746068966460",
  appId: "1:746068966460:web:1647f9b1b0e18cf97d1739"
}; //copied from firebase 

// Initialize Firebase

export default function Login() {
    const handleLogin = ({ email, password }) => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        //login with firebase auth
        signInWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res.user))
            .catch(console.error)
    }
    return (
        <section style={{ padding: '2em '}}>
    <Form
        onFinish={handleLogin} //what it does when form is submitted after rules are met
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        >
        <Form.Item label ='Email' name='email'
            rules={[{ required: true, message: 'Please enter a valid email'}]}>
            <Input/>
        </Form.Item>
        <Form.Item label ='Password' name='password'
            rules={[{ required: true, message: 'Please enter your password'}]}>
            <Input.Password/>
        </Form.Item>
        <Form.Item
            wrapperCol={{span: 16, offset:  8}}>
            <Button type='primary' htmlType='submit'>Login</Button> 
        </Form.Item>
    </Form>
    </section>
    )
}