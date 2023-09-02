import { Button, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';



export const CreateContent: FC<{ create: (text: string) => void }> = ({ create }) => {
    const { register, handleSubmit } = useForm<{ text: string }>();
    const onSubmit = handleSubmit((data: { text: string }) => {
       return create(data.text)
    });

    return (
        <form onSubmit={onSubmit}>
         
            <TextField {...register("text")}  fullWidth label="☕" id="fullWidth" />

            <Button style={{width: 100, height:55}} type="submit" variant="outlined">+ Add</Button>
        </form>
    );
}