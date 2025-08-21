import {
    NextResponse
} from 'next/server';

export async function GET(){
    try{
        const response = await fetch('https://api.github.com/users/WJH-irving/repos');
        const repos = await response.json();
        return NextResponse.json(repos);
    }catch(error){
        return NextResponse.json({
            error:'Failed to Fetch repos'
        },{
            status:500
        })
    }
}
