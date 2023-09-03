"use client"
import React from 'react'
import {useRouter} from "next/navigation"

const UserId = ({params}) => {
  const router=useRouter()
 
  console.log(params.id)
  return (
    <div>UserId</div>
  )
}

export default UserId