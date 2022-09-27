import setParamsToPath from '../helpers/setParamsToPath'

class RouteModel {
  constructor(name, path, component) {
    this.name = name
    this.path = path
    this.component = component
    this.Component = component
  }

  getRoute({ params = null, query = null } = {}) {
    let route = this.path
    if (params) {
      Object.keys(params).forEach((param) => {
        const value = params[param]
        route = setParamsToPath(param, value, route)
      })
    }
    if (query) {
      route += '?'
      Object.keys(query).forEach((q) => {
        const value = query[q]
        route += '&' + q + '=' + value
      })
    }
    return route
  }

  goTo(history, params = null, query = null) {
    history.push(this.getRoute({ params, query }))
  }
}

export default RouteModel
