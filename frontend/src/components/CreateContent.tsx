import { FC } from 'react';
import { useForm } from 'react-hook-form';



export const CreateContent: FC<{ create: (text: string) => void }> = ({ create }) => {
    const { register, handleSubmit } = useForm<{ text: string }>();
    const onSubmit = handleSubmit((data: { text: string }) => {
       return create(data.text)
    });

    return (
        <form onSubmit={onSubmit}>
            <input {...register("text")}   />
            <button type="submit" className='btnAdd' >+ Add</button>
        </form>
    );
}