function setParamsToPath(param, value, path = '') {
    const name = param.replace(/[\[\]]/g, '\\$&')
    const regex = new RegExp(':' + name)
    return path.replace(regex, value)
  }
  
  export default setParamsToPath
  