import {useParams} from 'react-router-dom'
import Accordion from '../components/Accordion';
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
    return(
        <>
         <div className="relative h-screen pt-24">
            <h1 className='font-bold mt-12 text-center text-5xl underline'>{subjectName}</h1>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/8 w-1/2 flex flex-col gap-3'>
                <Accordion examName='FA' />
                <Accordion examName='SA' />
                <Accordion examName='ETE' />
            </div>
         </div>
         
        </>

    )
}

export default Subject;