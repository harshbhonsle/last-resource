import {useParams} from 'react-router-dom'
import Accordion from '../components/Accordion';
import { useEffect, useState } from 'react';

const capitalFirstWord = (word) => {
    // let newWord = '';

    // let firstChar = word[0].toUpperCase();
    // newWord += firstChar;
    // let remainingWord = word.substr(1, word.length);
    // newWord += remainingWord;

    // return newWord;  
    // or we can do like this ->

    return word[0].toUpperCase() + word.substr(1, word.length);
}



const Subject =()=>{
    const {subjectID} = useParams();
    const subjectName = subjectID.split('-').map(word => capitalFirstWord(word)).join(' ');

    const [error, setError] = useState('');
    const [subjectFileLinks, setSubjectFileLinks] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const res = await fetch(`http://localhost:3000/subjects/${subjectID}`);
                const data = await res.json();

                if (res.status === 404) {
                    setError('Page does not exist');
                }

                if (res.ok) {
                    setSubjectFileLinks(data);
                    setError('');
                }

                if (!res.ok) {
                    setError('Some error occured');
                    setSubjectFileLinks([]);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchFiles();
    }, [])

    return(
        <>
         <div className="relative h-screen pt-24">
            <h1 className='font-bold mt-12 text-center text-5xl underline'>{subjectName}</h1>
            {(!error && subjectFileLinks) ? (
                <div className='absolute left-1/2 -translate-x-1/2 mt-20 w-1/2 flex flex-col gap-12'>
                    <Accordion examName='FA' links={subjectFileLinks.fa} />
                    <Accordion examName='SA' links={subjectFileLinks.st} />
                    <Accordion examName='ETE' links={subjectFileLinks.ete} />
                </div>
            ) : (
                <div className='absolute left-1/2  -translate-x-1/2 -translate-y-1/2 mt-20 w-3/4 flex flex-col gap-12 text-4xl font-bold text-center'>
                    Bhai Sorry , {subjectName} main toh meri bi back thi. 😭
                </div>
            )}
         </div>
         
        </>

    )
}

export default Subject;