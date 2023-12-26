import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../screens/Home';
// import State from '../StateContext/State';
const Navigation = () => {
    return (
        <BrowserRouter>
            {/* <State> */}
                <Routes>
                    <Route path="/" element={<Home/>} >
                    {/* <Route path="/project" element={<Project />} />
                    <Route path="/project/new" element={<CreateProject />} />
                    <Route path="/project/edit/:projectId" element={<CreateProject />} />
                    <Route path="/source/new" element={<CreateSource />} />
                    <Route path="/project/:project_id/source/new" element={<CreateSource />} />
                    <Route path="/source/get/:sourceId" element={<CreateSource />} />
                    <Route path="/project/team/:projectId/add" element={<AddMember />} />
                    <Route path="/logs" element={<Log />} />
                    <Route path="/logs/view/:viewId" element={<Log />} />
                    <Route path="/logs/:projectId" element={<Log />} />
                    <Route path="/source" element={<Source />} />
                    <Route path="/ViewProject/:projectId" element={<ViewProject/>} />
                    <Route path="/ViewSDK/:sourceId" element={<ViewSDK/>} />
                    <Route path="/archive" element={<Archive/>} />
                    <Route path="/view" element={<View/>} />
                    <Route path="/view/get-views" element={<View/>} />
                    <Route path="/view/add-team:viewId" element={<CreateAlert />} />
                    <Route path="/alert" element={<Alert/>} />
                    <Route path="/alert/new" element={<CreateAlert />} />
                    <Route path="/alert/alerthistory" element={<AlertHistory/>} />
                    <Route path="/alert/new/:alert_id" element={<CreateAlert />} /> */}
                   
                   
                    

                    </Route>
                    {/* <Route path="/signup/req" element={<GetOTP />} />
                    <Route path="/login/req" element={<GetOTP isLogin={true} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<PageNotFound />} /> */}

                </Routes>
            {/* </State> */}

        </BrowserRouter>)
}

export default Navigation