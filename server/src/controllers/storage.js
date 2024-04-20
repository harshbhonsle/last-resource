import path from 'path';

const getFile = (req, res) => {
    const { subject, exam, fileName } = req.params;
    const filePath = path.join(process.cwd(), `src/storage/${subject}/${exam}/${fileName}.pdf`);
    res.sendFile(filePath);
}

export { getFile };