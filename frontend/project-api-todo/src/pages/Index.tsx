import { CreateContent } from "../components/createContent";
import { ContentModel } from "../services/models";
import { service } from "../services/service"
import { useState } from 'react';



export function IndexContents() {
    const [contents, setContents] = useState<ContentModel[]>([]);
   
    async function createContent(text: string, ) {
        const contents = await service.createContent(text);
       return setContents(contents);
    }

    return (
        <div>
            <CreateContent create={(text) => createContent(text)} />      
        </div>
    )

}
