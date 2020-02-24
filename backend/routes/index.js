const Router = require('koa-router');
const DonationModel = require('./../models/donation');
const router = new Router();
const DB = require("./../components/db");

router

    .post('/donation', async (ctx, next) => {

        let { amount, currency } = ctx.request.body;

        await DB.connection();

        let model = new DonationModel({amount, currency});

        await model.save().catch(e => {
            ctx.throw(500, "error in db connection");
        });

        ctx.body = {
            "ok": true
        };
    });

module.exports = router;