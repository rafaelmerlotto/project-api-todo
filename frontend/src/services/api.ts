import { ContentModel } from "./models";

export class Service {
    constructor(private readonly url: string) { }

    async getContents(): Promise<ContentModel[]> {
        const res = await fetch(this.url, {
            headers:{
                'content-type': 'application/json',
            }
        });
        return await res.json();
    }

    async createContent(text: string): Promise<ContentModel[]>  {
        const res = await fetch(`${this.url}`, {
            method: 'POST',
            body: JSON.stringify({ text: text }),
            headers:{
                'content-type': 'application/json',
            }
        });
        return await res.json();
    }

    async deleteContent(id: string) {
        const res = await fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers:{
                'content-type': 'application/json',
            }
        });
        return await res.json();
    }

}