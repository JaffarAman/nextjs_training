"use client"
import { useParams } from "next/navigation"

const ProfileDetails = () => {
    const params = useParams()
    console.log("params", params)
    return (
        <h1>ProfileDetails: {params.name}  </h1>
    )
}

export default ProfileDetails