import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import { PublicLayout } from '@/layouts/public-layout'
import HomePage from '@/routes/home'
import AuthenticationLayout from '@/layouts/auth-layout'
import { SignInPage } from './routes/sign-in'
import { SignUpPage } from './routes/sign-up'
import ProtectedRoutes from './layouts/protected-routes'
import { MainLayout } from './layouts/main-layout'
import { Generate } from './components/generate'
import { Dashboard } from './routes/dashboard'
import { CreateEditPage } from './routes/create-edit-page'
import { MockLoadPage } from './routes/mock-load-page'
import { MockInterviewPage } from './routes/mock-interview-page'
import { Feedback } from './routes/feedback'
import AboutPage from './routes/AboutPage'
import ServicesPage from './routes/ServicesPage'
import ContactPage from './routes/ContactPage'
import ExternalChatbotPage from './routes/external-chatbot'
import ExternalResumeBuilderPage from './routes/external-resume-builder'




const App = () => {
  return (
    <div >
      <Router>
        <Routes>
             {/* Add your routes here */}
             <Route element={<PublicLayout/>}>
                 <Route index element={<HomePage/>}/>
                 <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/external-chatbot" element={<ExternalChatbotPage />} />
                <Route path="/external-resume-builder" element={<ExternalResumeBuilderPage />} />

                
             </Route>

             {/*authentication layout*/}
             <Route element={<AuthenticationLayout/>}>
                <Route path='/signin/*' element={<SignInPage/>}/>
                <Route path='/signup/*' element={<SignUpPage/>}/>
             </Route>
             {/* protected routes */}
             <Route 
                element={<ProtectedRoutes>
                <MainLayout/>
                </ProtectedRoutes>}>


              {/* Add all protected routes*/}
              <Route element={<Generate/>} path='/generate'>
                  <Route index element ={<Dashboard/>}/>
                  <Route path=":interviewId" element ={<CreateEditPage/>}/>
                  <Route path="interview/:interviewId" element ={<MockLoadPage/>}/>
                  <Route path="interview/:interviewId/start" element ={<MockInterviewPage/>}/>
                  
                  <Route path="feedback/:interviewId" element ={<Feedback/>}/>

              </Route>
             </Route>
        </Routes>
      </Router>
        
    </div>
    
  )
}

export default App
