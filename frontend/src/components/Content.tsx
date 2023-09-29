import { FC, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

interface ContentProps {
    id: string,
    text: string,
    deleteContent: () => void,

}

export const Content: FC<ContentProps> = ({ id, text, deleteContent }) => {

    const [completed, setCompleted] = useState<boolean>(false)

    const handleChange = () => {
        setCompleted(true)
    }

    return (
        <>

            <p className='itemList' key={id} >
                {completed === true ? <p className='textContent' style={{ textDecoration: 'line-through' }}>
                    {text}
                </p> : <p className='textContent' style={{ textDecoration: 'none' }}>
                    {text}
                </p>}
                <div className='btn'>
                    <input type='checkbox' className='checkbox' onChange={handleChange} />

                    <button className='btnDelete' key={id} onClick={deleteContent}><DeleteIcon className='deleteIcon' /></button>

                </div>

            </p>
        </>
    )
}

