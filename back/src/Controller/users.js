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
        controllerCall('getAllUsers', req, res, next)
    });

    app.post('/', async (req, res, next) => {
        controllerCall('createUser', {
            ...req.body,
        }, res, next)
    });

    app.patch('/:user_id', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('updateUser', {
            ...req.body,
            user_id,
        }, res, next)
    });

    app.patch('/ban/:user_id', async (req, res, next) => {
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

    app.get('/:user_id/links', async (req, res, next) => {
        const {
            user_id,
        } = req.params;

        controllerCall('getUserLinks', {
            user_id,
        }, res, next)
    });

    app.post('/:user_id/links', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('createUserLink', {
            ...req.body,
            user_id,
        }, res, next)
    });

    app.patch('/:user_id/links/:rowId', async (req, res, next) => {
        const {
            user_id,
            rowId,
        } = req.params;
        controllerCall('updateUserLink', {
            ...req.body,
            user_id,
            rowId,
        }, res, next)
    });

    app.delete('/:user_id/links', async (req, res, next) => {
        const {
            user_id,
        } = req.params;

        controllerCall('deleteUserLink', {
            id: user_id,
            ...req.body,
        }, res, next)
    });

    app.get('/:user_id/skills', async (req, res, next) => {
        const {
            user_id,
        } = req.params;

        controllerCall('getUserSkills', {
            user_id,
        }, res, next)
    })

    app.get('/:user_id/skills', async (req, res, next) => {
        const {
            user_id,
        } = req.params;

        controllerCall('getUserSkills', {
            ...req.body,
            user_id,
        }, res, next)
    })

    app.post('/:user_id/skills', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('createUserSkills', {
            ...req.body,
            user_id,
        }, res, next)
    })

    app.patch('/:user_id/skills/:skill_id', async (req, res, next) => {
        const {
            user_id,
            skill_id,
        } = req.params;

        controllerCall('updateUserSkill', {
            ...req.body,
            user_id,
            skill_id,
        }, res, next)
    })

    // TODO: After MVP
    app.get('/:user_id/competencies', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('getUserCompetencies', {
            ...req.body,
            user_id,
        }, res, next)
    })

    // TODO: After MVP
    app.post('/:user_id/competencies', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('createUserCompetencies', {
            ...req.body,
            user_id,
        }, res, next)
    })

    // TODO: After MVP
    app.patch('/:user_id/competencies', async (req, res, next) => {
        const {
            user_id,
        } = req.params;

        controllerCall('updateUserCompetencies', {
            ...req.body,
            user_id,
        }, res, next)
    })

    app.get('/:user_id/notes', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('getUserNote', {
            user_id,
        }, res, next)
    })
    // TODO: /users/notes/all should be /notes to follow the REST way
    //  as it return all the notes and not the one specific to one user
    app.get('/notes/all', async (req, res, next) => {
        controllerCall('getAllUserNotes', null, res, next)
    })

    app.post('/:user_id/notes', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('createUserNote', {
            ...req.body,
            user_id,
        }, res, next)
    })

    app.patch('/:user_id/notes/:rowId', async (req, res, next) => {
        const {
            user_id,
            rowId,
        } = req.params;
        controllerCall('updateUserNote', {
            ...req.body,
            user_id,
            rowId,
        }, res, next)
    })

    app.delete('/:user_id/notes/:rowId', async (req, res, next) => {
        const {
            rowId,
            user_id,
        } = req.params;
        controllerCall('deleteUserNote', {
            rowId,
            user_id,
        }, res, next)
    })

    app.post('/:user_id/attendances', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('createAttendance', {
            ...req.body,
            user_id,
        }, res, next)
    });

    app.patch('/:user_id/attendances', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('updateAttendance', {
            ...req.body,
            user_id,
        }, res, next)
    });

    app.patch('/:user_id/attendances/streak', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('updateAttendanceStreak', {
            ...req.body,
            user_id,
        }, res, next)
    });

    app.post('/:user_id/tasks/:task_id', async (req, res, next) => {
        const {
            user_id,
            task_id,
        } = req.params;
        controllerCall('createUserTask', {
            ...req.body,
            user_id,
            task_id,
        }, res, next)
    });

    app.patch('/:user_id/tasks/:task_id', async (req, res, next) => {
        const {
            user_id,
            task_id,
        } = req.params;
        controllerCall('updateUserTask', {
            ...req.body,
            user_id,
            task_id,
        }, res, next)
    });

    app.delete('/:user_id/tasks/:task_id', async (req, res, next) => {
        const {
            user_id,
            task_id,
        } = req.params;
        controllerCall('deleteUserTask', {
            user_id,
            task_id,
        }, res, next)
    });

    app.get('/:user_id/tasks/:task_id', async (req, res, next) => {
        const {
            user_id,
            task_id,
        } = req.params;
        controllerCall('getUserTask', {
            user_id,
            task_id,
        }, res, next)
    });

    app.get('/:user_id/tasks', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('getUserTasks', user_id, res, next)
    });

    app.post('/:user_id/assignments/:assignment_id', async (req, res, next) => {
        const {
            user_id,
            assignment_id,
        } = req.params;
        controllerCall('createUserAssignment', {
            ...req.body,
            user_id,
            assignment_id,
        }, res, next)
    });

    app.patch('/:user_id/assignments/:assignment_id', async (req, res, next) => {
        const {
            user_id,
            assignment_id,
        } = req.params;
        controllerCall('updateUserAssignment', {
            ...req.body,
            user_id,
            assignment_id,
        }, res, next)
    });

    app.delete('/:user_id/assignments/:assignment_id', async (req, res, next) => {
        const {
            user_id,
            assignment_id,
        } = req.params;
        controllerCall('deleteUserAssignment', {
            ...req.body,
            user_id,
            assignment_id,
        }, res, next)
    });

    app.get('/:user_id/assignments/:assignment_id', async (req, res, next) => {
        const {
            user_id,
            assignment_id,
        } = req.params;
        controllerCall('getUserAssignment', {
            user_id,
            assignment_id,
        }, res, next)
    });
    app.get('/:user_id/assignments', async (req, res, next) => {
        const {
            user_id,
        } = req.params;
        controllerCall('getUserAssignments', user_id, res, next)
    });


    return app;
}
