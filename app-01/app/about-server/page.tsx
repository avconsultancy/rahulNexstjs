import apiGetGithubUser from "@/io/api-get-github-users";

export default async function AboutPage() {
    const r =await apiGetGithubUser()
    return <div>About Server
{JSON.stringify(r)}

    </div>;
}
