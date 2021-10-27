import { Result } from 'neverthrow'
import { useRouter } from 'next/dist/client/router'
import React, { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'

interface Props {
    children: React.ReactElement[]
}


interface ChildPath {
    '/': React.ReactElement,
    [path: string]: React.ReactElement
}


const defaultStyle = {
    transition: `opacity 200ms ease`,
    opacity: 1
}

const transitionStyles = {
    entering: { opacity: 0, },
    entered: { opacity: 1, },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 }
}

interface PathData {
    path: string
    data: object
}

function SectionRouter({ children }: Props) {
    const [currentPath, setCurrentPath] = useState<PathData>({ path: '/', data: {} })
    const paths = children.map(c => c.props.hash)
    const router = useRouter()

    const handleRouteChange = (url: string, _?: any) => {
        const nextPath = paths.find(path => url.match(`/#${path}`)) || '/'
        const pathData = getUrlData(url).unwrapOr({})
        setCurrentPath({ path: nextPath, data: pathData })
    }

    const getUrlData = Result
        .fromThrowable((url: string): PathData['data'] => {
            const parameters = url.split('?')[1]
            if (!parameters) return {}
            const URLO = new URL('https://a.co?' + parameters)
            return Object.fromEntries(URLO.searchParams)
        })


    useEffect(() => {
        const currentPath = router.asPath
        handleRouteChange(currentPath) //change route during initial render

        router.events.on('hashChangeStart', handleRouteChange)
        return () => { router.events.off('hashChangeStart', handleRouteChange) }
    }, [router.asPath, router.events])


    return <>
        {children.map((c) => {
            const hash = c.props.hash
            return <Transition key={hash} in={hash === currentPath.path} timeout={100} appear>
                {state => (
                    <div style={{
                        ...defaultStyle, ...transitionStyles[state],
                        display: hash !== currentPath.path ? 'none' : 'block',
                        width: '100%',
                        position: 'relative'
                    }}>
                        {/* {c} */}
                        {React.cloneElement(c, { ...c.props, data: currentPath.data })}
                    </div>
                )}
            </Transition>
        })}

    </>

}

export default SectionRouter