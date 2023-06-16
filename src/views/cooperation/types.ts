export enum SchoolType {
    FULL_TIME = 'fullTime',
    PART_TIME = 'partTime',
    ON_THE_JOB = 'onTheJob'
}

export type School = {
    [key: string]: string | (SchoolType | SchoolType[])| (string | number) | (string | string[]) | undefined,
    name: string,
    majorName: string,
    type: SchoolType | SchoolType[],
    fee: string,
    quota?: string | number,
    lengthOfSchooling?: string,
    location?: string | string[],
    typeName?: string,
}