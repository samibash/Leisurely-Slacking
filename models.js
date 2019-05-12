const { Sequelize } = require('sequelize')


const db = new Sequelize({
    database: 'leisure_db',
    dialect: 'postgres',
    define: {
      underscored: true
    },
  })

//   Model Definitions 

const Hotel = db.define('hotel', {
    name: Sequelize.STRING,
    loacation: Sequelize.STRING,
    description: Sequelize.TEXT
   
  });

  const Destination = db.define('destination', {
    photo: Sequelize.STRING,
    description: Sequelize.TEXT
  });

  const Bar = db.define('bar', {
    name: Sequelize.STRING, 
    address: Sequelize.STRING,
    zip_code: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    type:Sequelize.STRING

  });
  const Review = db.define('review', {
    user_name: Sequelize.STRING,
    caption: Sequelize.STRING,
    experience: Sequelize.TEXT,
    trip_type: Sequelize.STRING
  });

//    Model Associations 

Destination.hasMany(Hotel, {
    onDelete: 'cascade'
  });
  
  Hotel.belongsTo(Destination)
  
  Hotel.hasMany(Review, {
    onDelete: 'cascade'
  });
  
  Review.belongsTo(Hotel)
  
  Hotel.hasMany(Bar, {
    onDelete: 'cascade'
  });
  
  Bar.belongsTo(Hotel)
  

  module.exports = {
    db,
    Hotel,
    Review,
    Bar,
    Destination
  }
  