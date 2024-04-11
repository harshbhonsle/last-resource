import {useParams} from 'react-router-dom'
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
        <div className="h-screen pt-20 font-bold text-center">{subjectName}</div>
    )
}

export default Subject;