LOCAL
'/twitter/byID'
post('http://localhost:8000/twitter/byID',data={'id':'1255205007802216449'})

'/twitter/byQuery'
post('http://localhost:8000/twitter/byQuery',data={'query':'gracias medicos'})

'/posts/:page'
get('http://localhost:8000/posts/1')

'/post/:id'
get('http://localhost:8000/post/63')


PRODUCTION
'/twitter/byQuery'
post('https://teagradezco.herokuapp.com/twitter/byQuery',data={'query':'gracias medicos'})
 