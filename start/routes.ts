import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('aktuelles')
})

Route.get('/aktuelles', async ({ view }) => {
  return view.render('aktuelles')
})

Route.get('/verein', async ({ view }) => {
  return view.render('verein')
})

Route.get('/kontakt', async ({ view }) => {
  return view.render('kontakt')
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
