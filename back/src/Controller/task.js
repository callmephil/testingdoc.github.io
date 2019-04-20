import Express from 'express'

const app = Express();

export default async (controller, isLoggedIn) => {
    app.get('/', (req, res, next) => res.send('Ok from task datas'))

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
        controllerCall('createTask', {
            ...req.body,
        }, res, next)
    });

    app.delete('/delete/:task_id', async (req, res, next) => {
        const {
            task_id,
        } = req.params;
        controllerCall('deleteTask', task_id, res, next)
    });

    app.post('/properties', async (req, res, next) => {
        controllerCall('createTaskProperties', {
            ...req.body,
        }, res, next)
    });

    app.delete('/properties', async (req, res, next) => {
        controllerCall('deleteTaskProperties', {
            ...req.body,
        }, res, next)
    });

    return app;
}
