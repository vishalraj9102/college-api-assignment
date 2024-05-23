const express = require('express');
const app = express();
const port = 3004;

// Sample data representing tables
const colleges = [
    { id: 1, College_Name : 'Arts and Science Colleges', Course_Name : 'Medical science', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000},
    { id: 2, College_Name: 'Indian Institutes of Information Technology', Course_Name: 'Aerospace Engineering ', Duration: 4 , Accommodation : 'Non AC',Accommodation_Fee:10000 },
    { id: 3, College_Name: 'Indian Institutes of Technology', Course_Name: 'Dental colleges', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 4, College_Name: 'Indian Institutes of Management', Course_Name: 'Agriculture', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 5, College_Name: 'National Forensic Sciences University', Course_Name: 'Management', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 6, College_Name: 'National Institutes of Technology', Course_Name: 'Hospitality schools', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 7, College_Name: 'National Law University', Course_Name: 'Architecture schools', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 8, College_Name: 'National Institute of Design (NIDs)', Course_Name: 'Journalism ', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 9, College_Name: 'Indian Institutes of Science Education and Research', Course_Name: 'Maritime ', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 10, College_Name: 'All India Institutes of Medical Sciences', Course_Name: 'Nursing ', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 11, College_Name: 'National Institutes of Pharmaceutical Education and Research', Course_Name: 'Optometry schools', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 12, College_Name: 'Institute of Hotel Management', Course_Name: 'Institutions of Music', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 13, College_Name: 'Indian Institute of Tourism and Travel Management', Course_Name: 'Pharmacy schools', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 14, College_Name: 'School of Planning and Architecture', Course_Name: 'Agriculture', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },
    { id: 15, College_Name: 'Agricultural institutions', Course_Name: 'Library and information science', Duration: 4 , Accommodation : 'AC ', Accommodation_Fee:10000 },

];

const courses = [
    { id: 1, collegeId: 1, College_Name: 'Arts and Science Colleges', fee: '20,0000' },
    { id: 2, collegeId: 2, College_Name: 'Indian Institutes of Information Technology', fee: '500,000' },
    { id: 3, collegeId: 3, College_Name: 'Indian Institutes of Technology', fee: '30,0000 '},
    { id: 4, collegeId: 4, College_Name: 'National Institutes of Technology', fee: '30,0000' },
    { id: 5, collegeId: 5, College_Name: 'National Law University', fee: '40,000' },
    { id: 6, collegeId: 6, College_Name: 'National Institute of Design (NIDs)', fee: 3000 },
    { id: 7, collegeId: 7, College_Name: 'Indian Institutes of Science Education and Research', fee: 3000 },
    { id: 8, collegeId: 8, College_Name: 'All India Institutes of Medical Sciences', fee: 3000 },
    { id: 9, collegeId: 9, College_Name: 'Indian Institutes of Science Education and Research', fee: 3000 },
    { id: 10, collegeId: 10, College_Name: 'All India Institutes of Medical Sciences', fee: 3000 },
    { id: 11, collegeId: 11, College_Name: 'National Institutes of Pharmaceutical Education and Research', fee: 3000 },
    { id: 12, collegeId: 12, College_Name: 'Institute of Hotel Management', fee: 3000 },
    { id: 13, collegeId: 13, College_Name: 'Indian Institute of Tourism and Travel Management', fee: 3000 },
    { id: 14, collegeId: 14, College_Name: 'School of Planning and Architecture', fee: 3000 },
    { id: 15, collegeId: 15, College_Name: 'Agricultural institutions', fee: 3000 },
    
];

// Endpoint to get the list of colleges with their courses and fees
app.get('/api/colleges', (req, res) => {
    const collegeDetails = colleges.map(college => {
        const collegeCourses = courses.filter(course => course.collegeId === college.id);
        return {
            ...college,
            courses: collegeCourses.map(course => ({
                name: course.name,
                fee: course.fee
            }))
        };
    });
    res.json(collegeDetails);
});

// Endpoint to get a specific college by ID with its courses and fees
app.get('/api/colleges/:id', (req, res) => {
    const collegeId = parseInt(req.params.id, 10);
    const college = colleges.find(c => c.id === collegeId);
    if (college) {
        const collegeCourses = courses.filter(course => course.collegeId === collegeId);
        res.json({
            ...college,
            courses: collegeCourses.map(course => ({
                name: course.name,
                fee: course.fee
            }))
        });
    } else {
        res.status(404).send('College not found');
    }
});

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});