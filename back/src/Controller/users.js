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

    app.get("/get/:id", async (req, res, next) => {
        const {
            id
        } = req.params;
        controllerCall('getUser', id, res, next)
    });

    app.get("/list", async (req, res, next) => {
        const {
            order,
            desc,
            limit,
            start
        } = req.query;
        
        controllerCall('getAllUser', {
            order,
            desc,
            limit,
            start
        }, res, next)
    });


    return app;
}