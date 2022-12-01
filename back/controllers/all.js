// import fs from 'fs'
// import mongoose from 'mongoose';
// import Course from '../model/courseModal.js'
// import Test from '../model/testModal.js'

// const port = 5000

// mongoose.connect('mongodb+srv://maven:maven@cluster0.wpalxo0.mongodb.net/masterpanel?retryWrites=true&w=majority')
// .then(()=>app.listen(port,()=>console.log(`connected to database and listening to ${port}`)))
// .catch((err) => console.log(err));

// // READ JSON FILE
// const tests = JSON.parse(
//   fs.readFileSync(`${__dirname}/test.json`, 'utf-8')
// );

// const courses = JSON.parse(
//     fs.readFileSync(`${__dirname}/course.json`, 'utf-8')
//   );

// // IMPORT DATA INTO DB
// const importDataTest = async () => {
//   try {
//     await Test.create(tests);
//     console.log('Data successfully loaded!');
//   } catch (err) {
//     console.log(err);
//   }
//   process.exit();
// };

// const importDataCourse = async () => {
//     try {
//       await Course.create(courses);
//       console.log('Data successfully loaded!');
//     } catch (err) {
//       console.log(err);
//     }
//     process.exit();
//   };





// // DELETE ALL DATA FROM DB
// const deleteDataTest = async () => {
//   try {
//     await Test.deleteMany();
//     console.log('Data successfully deleted!');
//   } catch (err) {
//     console.log(err);
//   }
//   process.exit();
// };

// const deleteDataCourse = async () => {
//     try {
//       await Course.deleteMany();
//       console.log('Data successfully deleted!');
//     } catch (err) {
//       console.log(err);
//     }
//     process.exit();
//   };
  



// if (process.argv[2] === '--importTest') {
//     importDataTest();
// } else if (process.argv[2] === '--deleteTest') {
//     deleteDataTest();
// }else if (process.argv[2] === '--importCourse') {
//     importDataCourse();
//   }else if (process.argv[2] === '--deleteCourse') {
//     deleteDataCourse();
//   }
