export const countBaseURL = () => {
    if (process.env.NODE_ENV === 'development') {
      return '/api/v2'
    }
    const { hostname, port, protocol, origin } = window.location
    // const serverURL = port ? `${protocol}//${hostname}:${(Number(port) + 1).toString()}` : origin
    const serverURL = port ? `${protocol}//${hostname}:${Number(port).toString()}` : origin
    return `${serverURL}/api/v2`
}