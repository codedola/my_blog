import React from 'react'
import { useParams } from "react-router-dom";
import ChangePasswordForm from "../ChangePasswordForm"
import UserProfile from "../UserProfile"
import UsersTable from '../UsersTable';

//
export default function DashboardTopic() {
    const { topicTitle } = useParams();

    switch (topicTitle) {
        case "profile": {
            return (
               <UserProfile />
            )
        }
        case "users": {
            return <UsersTable />
        }
        case "change-password": {
            return (
                <div className="tcl-container bg-white-gray"
                    style={{ height: "100%", borderRadius: 10 }}>
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