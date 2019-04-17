import Express from 'express'

const app = Express();

export default async (controller, isLoggedIn) => {
    app.get('/', (req, res, next) => res.send('Ok from groups datas'))
    
    const controllerCall = async (method, props, res, next) => {
        try {
            const result = await controller[method](props);
            res.json({
                success: true,
                result,
            });
        } catch (e) {
            next(e);
        }
    }

    return app;
}
