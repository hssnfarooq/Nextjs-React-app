import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import LoginForm from '../app/components/login-form'
import AdminLayout from '../app/components/Layout/adminLayout'
const Login = () => {
  return (
    <div >
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <LoginForm />
      </main>
    </div>
  )
}
// Login.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <AdminLayout>
//       {page}
//     </AdminLayout>
//   )
// }
export default Login
