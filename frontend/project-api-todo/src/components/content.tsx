import { FC } from 'react'

interface ContentProps {
    id: string,
    text: string,
    handleDelete: () => void
}

export const Content: FC<ContentProps> = ({id, text, handleDelete}) => {
return(
    <div>
        
    </div>
)
}