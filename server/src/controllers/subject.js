import path from 'path';
import fs from 'fs';

const getsubjectFiles = (req, res) => {
    const { subject } = req.params;

    try {
        const subjectDirPath = path.join(process.cwd(), `src/storage/${subject}`);
        const faFileNames = fs.readdirSync(path.join(subjectDirPath, 'FA'));
        const stFileNames = fs.readdirSync(path.join(subjectDirPath, 'ST'));
        const eteFileNames = fs.readdirSync(path.join(subjectDirPath, 'ETE'));

        const faFilesData = []
        const stFilesData = []
        const eteFilesData = []
    
        faFileNames.forEach(fileName => {
            const fileURL = `http://localhost:3000/storage/${subject}/FA/${fileName.substring(0, fileName.length - 4)}`;
            const faFile = { name: fileName, url: fileURL };
            faFilesData.push(faFile);
        })
    
        stFileNames.forEach(fileName => {
            const fileURL = `http://localhost:3000/storage/${subject}/ST/${fileName.substring(0, fileName.length - 4)}`;
            const stFile = { name: fileName, url: fileURL };
            stFilesData.push(stFile);
        })
    
        eteFileNames.forEach(fileName => {
            const fileURL = `http://localhost:3000/storage/${subject}/ETE/${fileName.substring(0, fileName.length - 4)}`;
            const eteFile = { name: fileName, url: fileURL };
            eteFilesData.push(eteFile);
        })
    
        res.json({
            fa: faFilesData,
            st: stFilesData,
            ete: eteFilesData,
        });
    } catch (error) {
        res.status(404).json({ error });
    }
}

export { getsubjectFiles };