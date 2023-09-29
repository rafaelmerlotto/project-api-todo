export interface ContentModel {
    id: string;
    text: string;
    creationTime: Date;
    completed: boolean;
}

export const data: ContentModel[]= [
    {
        id: "cllzmntkm0000vmh8e0y17bxw",
        text: "NEW CONTENT2",
        creationTime: new Date(),
        completed: false
    }
]