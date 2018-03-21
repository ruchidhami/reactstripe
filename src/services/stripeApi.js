class StripeApi {
  base_url = ''
  headers =  {}

  constructor() {
    this.headers['Authorization'] = `Bearer ${process.env.REACT_APP_STRIPE_AUTHORIZATION_TOKEN}`
    this.base_url = process.env.REACT_APP_STRIPE_API_URL
  }
  
  get(path) {
    const url = `${this.base_url}${path}`
  
    return fetch(url, {
        headers: this.headers
      })
      .then(res => {
        return res.json()
      })
      .catch(error => alert(error))
  }

}

export default StripeApi;