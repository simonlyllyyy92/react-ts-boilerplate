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
    contentType
  } = params

  const option = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: ''
    },
    cache: 'no-cache'
  }

  if (accessToken) {
    option.headers = {
      ...option.headers,
      Authorization: `Bearer ${accessToken}`
    }
  }

  let endResolvedUrl = url

  if (queryParams) {
    endResolvedUrl = url + '?' + serializeData(queryParams)
  }

  try {
    // const fetchPromise = await
  } catch (e) {}
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
