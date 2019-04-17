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
    
    app.get('/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('getUser', user_id, res, next)
    });
    
    app.get('/', async (req, res, next) => {
        controllerCall('getAllUsers', {
            ...req.query,
        }, res, next)
    });
    
    app.post('/', async (req, res, next) => {
        controllerCall('createUser', {
            ...req.body,
        }, res, next)
    });
    
    app.put('/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('updateUser', {
            ...req.body,
            user_id,
        }, res, next)
    });
    
    app.put('/ban/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('banUser', {
            user_id,
        }, res, next)
    });
    
    /*
     * User Links
     * */
    
    app.get('/links/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('getUserLink', {
            user_id,
        }, res, next)
    });
    
    app.post('/links', async (req, res, next) => {
        controllerCall('createUserLink', {
            ...req.body,
        }, res, next)
    });
    
    app.put('/links/:user_id/:row_id', async (req, res, next) => {
        const {
            user_id,
            row_id,
        } = req.params;
       
        controllerCall('updateUserLink', {
            user_id,
            row_id,
            ...req.body,
        }, res, next)
    });
    
    app.delete('/links/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('deleteUserLink', {
            user_id,
        }, res, next)
    });
    return app;
}
