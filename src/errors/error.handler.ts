export default  class ErrorHandler extends Error {
    status: number

    constructor(message: string, status: number = 503) {
        super()

        this.message = message
        this.status = status
    }

}