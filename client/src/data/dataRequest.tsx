export const data = async () => {
    await fetch('https://covid19api.herokuapp.com/')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            return (response)
        })
}