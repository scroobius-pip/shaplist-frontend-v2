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
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 }
}

function SectionRouter({ children }: Props) {
    const [currentPath, setCurrentPath] = useState('/')
    const paths = children.map(c => c.props.hash)
    const router = useRouter()

    const handleRouteChange = (url: string, _?: any) => {

        let nextPath = '/'
        for (const path of paths) {

            if (url.match(`/#${path}`)) {
                nextPath = path
                break
            }
        }
        setCurrentPath(nextPath)
    }

    useEffect(() => {
        const currentPath = router.asPath
        handleRouteChange(currentPath)
    }, [])

    useEffect(() => {
        router.events.on('hashChangeStart', handleRouteChange)

        return () => { console.log('disposing'); router.events.off('hashChangeStart', handleRouteChange) }
    }, [])


    return <>
        {children.map((c) => {
            const hash = c.props.hash
            return <Transition key={hash} in={hash === currentPath} timeout={100} appear>
                {state => (
                    <div style={{ ...defaultStyle, ...transitionStyles[state], display: hash !== currentPath ? 'none' : 'block', width: '100%' }}>
                        {c}
                    </div>
                )}
            </Transition>
        })}

    </>

}

export default SectionRouter