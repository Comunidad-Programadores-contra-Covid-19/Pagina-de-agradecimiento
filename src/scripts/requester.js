LOCAL
'/twitter/byID'
post('http://localhost:8000/twitter/byID',data={'id':'1259312200650493953'})

'/twitter/byQuery'
post('http://localhost:8000/twitter/byQuery',data={'query':'gracias medicos'})

'/cartas/:page'
get('http://localhost:8000/cartas/1/new')

'/api/carta/:id'
get('http://localhost:8000/api/carta/2')

//reports
get('http://localhost:8000/api/reportedPostIDsByIP')

//cron
post('http://localhost:8000/api/cron/start')
post('http://localhost:8000/api/cron/stop')


PRODUCTION
'/twitter/byQuery'
post('https://teagradezco.herokuapp.com/twitter/byQuery',data={'query':'gracias medicos'})
 
