import Express from 'express'

const app = Express();

export default async (controller, isLoggedIn) => {
    // app.get('/', (req, res, next) => res.send('Ok from user datas'))

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
        controllerCall('createAttendance', {
            ...req.body,
        }, res, next)
    });

    app.patch('/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('updateAttendance', {
            ...req.body,
            user_id,
        }, res, next)
    });

    app.patch('/streak/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('updateAttendanceStreak', {
            ...req.body,
            user_id,
        }, res, next)
    });

    return app;
}
