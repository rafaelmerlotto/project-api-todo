import { Button, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';



export const CreateContent: FC<{ create: (text: string) => void }> = ({ create }) => {
    const { register, handleSubmit } = useForm<{ text: string }>();
    const onSubmit = handleSubmit((data: { text: string }) => {
          create(data.text)
         
        setTimeout(() => {
            window.location.reload()
        }, 100)

    });

    return (
        <form onSubmit={onSubmit}>
         
            <TextField {...register("text")}  fullWidth label="☕" id="fullWidth" />

            <Button type="submit" variant="outlined">Send</Button>
        </form>
    );
}