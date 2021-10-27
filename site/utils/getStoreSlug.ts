import absoluteUrl from 'next-absolute-url'
import { fromThrowable, Result } from 'neverthrow'
import { IncomingMessage } from 'http'

export default (req: IncomingMessage): Result<string, Error> => {
    const getHostName = fromThrowable(() => {
        const { host } = absoluteUrl(req)
        console.log('host', host)
        return host
    })

    return getHostName().mapErr(e => Error((e as any)?.message ?? 'Failed to get slug'))
}