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
    
    app.put('/links/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('updateUserLink', {
            user_id,
            ...req.body,
        }, res, next)
    });
    
    app.delete('/links/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('deleteUserLink', {
            user_id,
            ...req.body,
        }, res, next)
    });
    
    app.get('/skills/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('getUserSkills', {
            user_id,
        }, res, next)
    })
    
    app.get('/skills/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('getUserSkills', {
            user_id,
            ...req.body,
        }, res, next)
    })
    
    app.post('/skills', async (req, res, next) => {
        controllerCall('createUserSkills', {
            ...req.body,
        }, res, next)
    })
    
    app.patch('/skills/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('updateUserSkill', {
            user_id,
            ...req.body,
        }, res, next)
    })
    
    // TODO: After MVP
    app.get('/competencies/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('getUserCompetencies', {
            user_id,
            ...req.body,
        }, res, next)
    })
    
    // TODO: After MVP
    app.post('/competencies', async (req, res, next) => {
        controllerCall('createUserCompetencies', {
            ...req.body,
        }, res, next)
    })
    
    // TODO: After MVP
    app.patch('/competencies/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('updateUserCompetencies', {
            user_id,
            ...req.body,
        }, res, next)
    })
    
    app.get('/notes/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        
        controllerCall('getUserNote', {
            user_id,
        }, res, next)
    })
    app.get('/notes', async (req, res, next) => {
       // TODO: return only success
        controllerCall('getAllUserNotes', {}, res, next)
    })
    
    app.post('/notes', async (req, res, next) => {
        controllerCall('createUserNote', {
            ...req.body,
        }, res, next)
    })
    
    app.patch('/notes/:rowId', async (req, res, next) => {
        const {
            rowId,
        } = req.params;
        
        controllerCall('updateUserNote', {
            rowId,
            ...req.body,
        }, res, next)
    })
    
    app.delete('/notes/:rowId', async (req, res, next) => {
        const {
            rowId,
        } = req.params;
        
        controllerCall('deleteUserNote', {
            rowId,
        }, res, next)
    })
    
    return app;
}
