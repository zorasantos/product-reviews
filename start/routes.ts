/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'

const ListAllProductsController = () => import('#controllers/Product/list_all_product_controller')
const CreateProductController = () => import('#controllers/Product/create_product_controller')
const GetProductByIdController = () => import('#controllers/Product/get_product_by_id_controller')
const UpdateProductController = () => import('#controllers/Product/update_product_controller')

const UpdateUserController = () => import('#controllers/User/update_user_controller')
const CreateUserController = () => import('#controllers/User/create_user_controller')
const ListAllUsersController = () => import('#controllers/User/list_all_users_controller')
const GetUserByIdController = () => import('#controllers/User/get_user_by_id_controller')

router.post('users', [CreateUserController, 'handle'])
router.get('users', [ListAllUsersController, 'handle'])
router.get('users/:id', [GetUserByIdController, 'handle'])
router.put('users/:id', [UpdateUserController, 'handle'])

router.post('products', [CreateProductController, 'handle'])
router.get('products', [ListAllProductsController, 'handle'])
router.get('products/:id', [GetProductByIdController, 'handle'])
router.put('products/:id', [UpdateProductController, 'handle'])
router.post('auth', [AuthController, 'handle'])
