import axios from "axios"
import { visitFunctionBody } from "typescript"

interface formBodyObj {
  [key: string]: string
}

export async function httpFetch(params: any) {
  const {
    method,
    url,
    formData,
    queryParams,
    accessToken,
  } = params

  const option = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: ''
    },
    cache: 'no-cache',
    body:{},
    params:{}
  }

  if (accessToken) {
    option.headers = {
      ...option.headers,
      Authorization: `Bearer ${accessToken}`
    }
  }

  if(formData){
      option.body = formData
  }

  let endResolvedUrl = url

  if (queryParams) {
    option.params = queryParams
  }

  try {
  
    // const fetchPromise = await axios({
    //     ...option,
    //     url:endResolvedUrl
    // })

    const {data} = await axios.get(endResolvedUrl, {
      params: queryParams
    })
    return data
    } catch (e) {
        throw new Error(e)
    }
}

function serializeData(formBodyObj: formBodyObj) {
  const filteredKeys = Object.keys(formBodyObj).filter((key) => {
    return !(formBodyObj[key] == null)
  })

  const requestBody = filteredKeys
    .map((key) => {
      return (
        encodeURIComponent(key) + '=' + encodeURIComponent(formBodyObj[key])
      )
    })
    .join('&')

  return requestBody
}
