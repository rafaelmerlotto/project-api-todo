import { FC } from 'react'
import { ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

interface ContentProps {
    id: string,
    text: string,
    deleteContent:() => void
}

export const Content: FC<ContentProps> = ({ id, text, deleteContent }) => {
    return (
        <div>
            <ListItemText
                key={id}
            >
                {text}
                <button key={id} onClick={deleteContent}><DeleteIcon /></button>               
            </ListItemText>
        </div>
    )
}