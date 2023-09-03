import { Content } from "../components/Content"
import { CreateContent } from "../components/CreateContent";
import { ContentModel } from "../services/models";
import { service } from "../services/service"
import { useEffect, useState } from 'react';


export function RenderContents() {
    const [contents, setContents] = useState<ContentModel[]>([]);
    useEffect(() => {
        async function getContent() {
            const getContents = await service.getContents();
            setContents(getContents)
        };
        getContent();
    }, []);

    async function createContent(text: string, ) {
        const contents = await service.createContent(text);
       console.log( setContents(contents));
       return setContents(contents);
    }

    async function deleteContent(id: string) {
        const getContents = await service.deleteContent(id);
        setContents(getContents)
    };
   
    return (
        <>
        <div className='listItem'>
                 {Object.values(contents).map((content) => (
                <Content 
                id={content.id} 
                text={content.text}
                 key={content.id}
                 deleteContent={() => deleteContent(content.id)}
                 />
            ))} 
        </div>
            <CreateContent create={createContent}/>         
        </>
    )

}
