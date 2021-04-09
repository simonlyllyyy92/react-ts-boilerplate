const cloudDev = {
    // could be our base url
    serverUrl: 'https://registry.npmjs.org/-/v1'
}

const config = {
    API: {
        ...cloudDev
    },
    GlobalPaginationSize: 20
}

export {config}