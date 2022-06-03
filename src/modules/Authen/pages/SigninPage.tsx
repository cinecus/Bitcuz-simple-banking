import React, { FC,useEffect } from 'react'
import AppWrapper from '../../../components/AppWrapper'
import AppGrid from '../../../components/AppGrid'
import GridItem from '../../../components/GridItem'
import { Form, Input, Button,message } from 'antd';
import { useSignIn } from '../../../hooks/AuthHook';
import { useAppSelector } from '../../../store/store';
import {  useNavigate } from "react-router-dom";

const SigninPage:FC<any> = () => {
  const {mutate,isLoading,error} = useSignIn()
  const {user} = useAppSelector(state=>state.auth)
  const onFinish = (values: any) => {
    mutate({...values})
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  let navigate = useNavigate();
    useEffect(() => {
        if (!!user) {
            navigate('/')
        }
    }, [user])
  if(isLoading) return <h1>Loading...</h1>
  return (
    <AppWrapper>
      <AppGrid id='section1' bg='#bebebe' height='90vh'  pd='2rem 8rem' justifyContent='center' alignItems='center'>
        <GridItem size={'50%'}  pd={'1rem'}>
        <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
          <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
        {
          error && <p style={{color:'red'}}>* {error.message}</p>
        }
        </GridItem>
      </AppGrid>
    </AppWrapper>
  )
}

export default SigninPage