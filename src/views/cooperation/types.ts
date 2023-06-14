export enum SchoolType {
    FULL_TIME = 'fullTime',
    PART_TIME = 'partTime'
}

export type School = {
    [key: string]: string | SchoolType| (string | number) | (string | string[]) | undefined,
    name: string,
    majorName: string,
    type: SchoolType,
    fee: string,
    quota?: string | number,
    lengthOfSchooling?: string,
    location?: string | string[],
    typeName?: string,
    
}