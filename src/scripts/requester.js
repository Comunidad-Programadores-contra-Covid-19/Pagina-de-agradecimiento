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
post('http://localhost:8000/api/cron/readTweets/start')
post('http://localhost:8000/api/cron/readTweets/stop')
post('http://localhost:8000/api/cron/all')


PRODUCTION
'/twitter/byQuery'
post('https://teagradezco.herokuapp.com/twitter/byQuery',data={'query':'gracias medicos'})
 


//cron
post('https://www.graciasporcuidarnos.com.ar/api/cron/readTweets/start')
post('https://www.graciasporcuidarnos.com.ar/api/cron/readTweets/stop')
post('https://www.graciasporcuidarnos.com.ar/api/cron/all')
