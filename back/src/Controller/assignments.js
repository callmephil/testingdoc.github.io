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

    app.get('/:assignment_id', async (req, res, next) => {
        const {
            assignment_id,
        } = req.params;
        controllerCall('getAssignment', assignment_id, res, next)
    });

    app.get('/list/:date', async (req, res, next) => {
        const {
            date,
        } = req.params;
        controllerCall('getAllAssignments', date, res, next)
    });

    app.post('/', async (req, res, next) => {
        controllerCall('createAssignment', {
            ...req.body,
        }, res, next)
    });

    app.patch('/:assignment_id', async (req, res, next) => {
        const {
            assignment_id,
        } = req.params;
        controllerCall('updateAssignment', {
            ...req.body,
            assignment_id
        }, res, next)
    });

    app.delete('/:assignment_id', async (req, res, next) => {
        const {
            assignment_id,
        } = req.params;
        controllerCall('deleteAssignment',  assignment_id, res, next)
    });

    return app;
}
