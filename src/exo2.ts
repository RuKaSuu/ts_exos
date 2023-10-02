interface Subject {
    id: number,
    name?: string,
    created_at?: string | Date,
}

interface Obj {
    [key: string]: Subject
}

export function sortByDate(obj: Obj, desc = false): Subject[] {
    if(desc) {
        
    }
    return []
}
