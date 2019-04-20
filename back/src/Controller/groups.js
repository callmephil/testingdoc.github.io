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

    app.post('/', async (req, res, next) => {
        controllerCall('createGroup', {
            ...req.body,
        }, res, next)
    });

    app.patch('/disable/:group_id', async (req, res, next) => {
        const {
            group_id,
        } = req.params;
        controllerCall('disableGroup', group_id, res, next)
    });

    app.post('/members', async (req, res, next) => {
        controllerCall('addGroupMember', {
            ...req.body,
        }, res, next)
    });

    app.delete('/members', async (req, res, next) => {
        controllerCall('removeGroupMember', {
            ...req.body,
        }, res, next)
    });

    return app;
}
