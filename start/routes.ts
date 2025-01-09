/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const UpdateUserController = () => import('#controllers/User/update_user_controller')
const CreateUserController = () => import('#controllers/User/create_user_controller')
const ListAllUsersController = () => import('#controllers/User/list_all_users_controller')
const GetUserByIdController = () => import('#controllers/User/get_user_by_id_controller')

router.post('users', [CreateUserController, 'handle'])
router.get('users', [ListAllUsersController, 'handle'])
router.get('users/:id', [GetUserByIdController, 'handle'])
router.put('users/:id', [UpdateUserController, 'handle'])
