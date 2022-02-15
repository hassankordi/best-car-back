//** some requires**//
const express = require('express');
const connection = require('./configration/config');
const userRoutes = require('./modules/user/routes/user.router');
require('dotenv').config()
const cors = require('cors');
const trainingReqRouter = require('./modules/trainingRequest/routes/trainingReq.router');
const vidsRoutes = require('./modules/vids/routes/vids.router');
const itemRoutes = require('./modules/items/routes/items.router');
const sliderRoutes = require('./modules/slider/routes/slider.router');
const transferRoutes = require('./modules/transfer/routes/transfer.router');
const homePageRoutes = require('./modules/homePage/routes/homePage.router');
const orderRoutes = require('./modules/orders/routes/orders.router');
const contactsRoutes = require('./modules/contacts/routes/contact.router');


//** end of requires**//

const app = express();
const port = process.env.PORT || 3000


//** middleware **//
app.use(express.json())
app.use(cors())



connection();

app.use(userRoutes)
app.use(trainingReqRouter)
app.use(vidsRoutes)
app.use(itemRoutes)
app.use(sliderRoutes)
app.use(transferRoutes)
app.use(homePageRoutes)

app.use(orderRoutes)

app.use(contactsRoutes)


app.use('/uploads', express.static('uploads'))




app.listen(port, function () {
    console.log(`server is running at ${port}`);
})
