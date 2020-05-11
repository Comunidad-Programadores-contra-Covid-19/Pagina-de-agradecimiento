LOCAL
'/twitter/byID'
post('http://localhost:8000/twitter/byID',data={'id':'1255205007802216449'})

'/twitter/byQuery'
post('http://localhost:8000/twitter/byQuery',data={'query':'gracias medicos'})

'/posts/:page'
get('http://localhost:8000/posts/1')

'/api/post/:id'
get('http://localhost:8000/api/post/2')


PRODUCTION
'/twitter/byQuery'
post('https://teagradezco.herokuapp.com/twitter/byQuery',data={'query':'gracias medicos'})
 