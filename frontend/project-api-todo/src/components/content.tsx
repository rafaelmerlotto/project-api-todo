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
        <>
            <p className='itemList' key={id} ><p className='textContent'>{text}</p>
                <button key={id} onClick={deleteContent}><DeleteIcon className='deleteIcon' /></button>               
            </p>
        </>
    )
}