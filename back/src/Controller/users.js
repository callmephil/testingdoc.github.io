import Express from 'express'

const app = Express();

export default async (controller, isLoggedIn) => {
    app.get('/', (req, res, next) => res.send("Ok from user datas"))

    const controllerCall = async (method, props, res, next) => {
        try {
            const result = await controller[method](props);
            res.json({
                success: true,
                result
            });
        } catch (e) {
            next(e);
        }
    }

    app.get("/get/:user_id", async (req, res, next) => {
        const {
            user_id
        } = req.params;
        controllerCall('getUser', user_id, res, next)
    });

    app.get("/list", async (req, res, next) => {
        const {
            order,
            desc,
            limit,
            start
        } = req.query;
        
        controllerCall('getAllUsers', {
            order,
            desc,
            limit,
            start
        }, res, next)
    });


    return app;
}