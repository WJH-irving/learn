import {
    useParams,
    useNavigate,
    Link,
} from "react-router-dom"
import {
    useEffect,
} from 'react'
import {
    useRepos
} from '@/hooks/useRepos';
import Loading from '@/components/Loading';

const RepoList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(useParams());

    const {repos,loading,error}= useRepos(id);// 自定义hooks
    console.log(repos,loading,error);
    useEffect(() => {
        // 
        if (!id.trim()) {
            navigate('/');
            return;
        }
        console.log(id);
    }, [])
    if(loading) return(<Loading/>);
    if(error) return(<>Error:{error}</>)


    return (
        <>
            <h1>RepoList</h1>
            <h2>Repositories for{id}</h2>
            {
                repos.map((repo)=>(
                    <Link key={repo.id} to={`/users/${id}/repos/${repo.name}`}>
                        {repo.name}
                    </Link>
                ))
            }
            
        </>
    )

}

export default RepoList