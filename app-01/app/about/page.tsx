"use client";
import apiGetGithubUser from "@/io/api-get-github-users";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    const executeApiGetGithubUsers=async()=>{
        const r=await apiGetGithubUser()
    }
    executeApiGetGithubUsers()
  }, []);
  return <div>About</div>;
}
