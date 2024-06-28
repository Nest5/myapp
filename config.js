
const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/books'
mongoose.connect('mongodb+srv://nestoramerican1:jMMVV5uKX5dMJCAG@devcam.l9kgh3w.mongodb.net/?retryWrites=true&w=majority&appName=devcam', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,    // Opcional: habilita la creación de índices
    }).then(() => {
        console.log('connected to MongoDB');
    }).catch((err)=> {
console.error('Error connecting to MongoDB:',err);
    });
    
module.exports = mongoose;

