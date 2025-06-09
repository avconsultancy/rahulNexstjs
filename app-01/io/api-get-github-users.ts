const apiGetGithubUser=async()=>{

    const response = await fetch('https://api.github.com/users',
        { next: { revalidate: 3600 } }
    )
    const status={response}
    console.log('status = '+status)
    return await response.json()
}
export default apiGetGithubUser;