import mongoose from 'mongoose';
 async function connect (){
    try {
        mongoose.connect('mongodb+srv://cuongpv:123456a@A@cluster0-eup7b.mongodb.net/test',{
            useNewUrlParser: true
        });
    }
    catch {
        console.log('Error');
    }
}
export default connect;