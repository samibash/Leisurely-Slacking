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
    description: Sequelize.STRING
   
  });

  const Destination = db.define('destination', {
    photo: Sequelize.STRING,
    description: Sequelize.STRING
  });
  const Bar = db.define('bar', {
    name: Sequelize.STRING,
    price: Sequelize.STRING,
    address: Sequelize.STRING,
    zip_code: Sequelize.INTEGER,
    phone_number: Sequelize.INTEGER,
    type:Sequelize.STRING

  });
  const Review = db.define('review', {
    user_name: Sequelize.STRING,
    caption: Sequelize.STRING,
    experience: Sequelize.STRING,
    trip_type: Sequelize.STRING
  });