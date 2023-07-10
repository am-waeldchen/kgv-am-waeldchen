import Route from '@ioc:Adonis/Core/Route'

Route.get('login', 'AuthController.loginShow').as('login.show')
Route.post('login', 'AuthController.login').as('login')
Route.post('logout', 'AuthController.logout').as('logout')

Route.get('/', ({ response }) => {
  response.redirect().toRoute('posts.index')
})

Route.get('/aktuelles', 'PostsController.index').as('posts.index')
Route.get('/new-post', 'PostsController.create').as('posts.create').middleware('auth')
Route.post('/new-post', 'PostsController.store').as('posts.store').middleware('auth')
Route.delete('/new-post/:id', 'PostsController.destroy').as('posts.destroy').middleware('auth')

Route.get('/verein', async ({ view }) => {
  return view.render('verein')
})

Route.get('/faq', async ({ view }) => {
  return view.render('faq')
})

Route.get('/anbau', 'HelpersController.calcGarden')
Route.post('/anbau', 'HelpersController.calcGarden')

Route.get('/rechtliches', async ({ view }) => {
  return view.render('rechtliches')
})

Route.get('/dokumente', async ({ view }) => {
  return view.render('dokumente')
})

Route.get('/impressum', async ({ view }) => {
  return view.render('impressum')
})

Route.get('/datenschutz', async ({ view }) => {
  return view.render('datenschutz')
})

