import React from 'react'
import { useParams } from "react-router-dom";
import ChangePasswordForm from "../ChangePasswordForm"
export default function UserDetailTopic() {
    const { topicTitle } = useParams();
   
    switch (topicTitle) {
        case "profile": {
            return (
                <h1>User Profile</h1>
            )
        }
        case "change-password": {
            return (
               <div className="tcl-container bg-white-blue" style={{height: "100%"}}>
                    <div className="tcl-row" >
                        <div className="tcl-col-12 tcl-col-sm-8 block-center">
                            <div className="spacing"></div>
                            <ChangePasswordForm sizeBtn="medium" />
                        </div>
                    </div>
                </div>
            )
        }
        default: {
            return null
        }
    }
}
