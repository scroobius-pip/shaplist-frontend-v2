import React, { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'

interface StepsContainerProps {
    children: React.ReactElement[]
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

function useSteps(startPage = 0, styles = {}) {
    const [currentStepIndex, setCurrentStepIndex] = useState(startPage)
    const [stepCount, setStepCount] = useState(0)
    const forward = () => setCurrentStepIndex((i) => i + 1)
    const back = () => setCurrentStepIndex((i) => i > 0 ? i - 1 : 0)

    const StepsContainer: React.FunctionComponent<StepsContainerProps> = ({ children }) => {
        useEffect(() => { setStepCount(children.length) }, [])
        return <>
            {children.map((c, i) => {
                return <Transition in={true} timeout={100} appear>
                    {state => (
                        <div style={{ ...defaultStyle, ...transitionStyles[state], display: i !== currentStepIndex ? 'none' : 'block', ...styles }}>
                            {c}
                        </div>
                    )}
                </Transition>
            })}

        </>
    }


    return {
        Steps: StepsContainer,
        back,
        forward,
        stepCount,
        get currentPage() { return currentStepIndex + 1 },

    }
}

export default useSteps