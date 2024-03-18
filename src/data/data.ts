interface IPersonData {
    id: number,
    fullName: string,
    email: string,
    phoneNumber: string,
}
export const personData: IPersonData[] = [
    {id: 1, fullName: 'Иванов Иван Иванович', email: 'ivanov@ivan.ivan', phoneNumber: '+70000000000'},
    {id: 2, fullName: 'Петров Петр Петрович', email: 'petrov@petr.petr', phoneNumber: '+70000000001'},
    {id: 3, fullName: 'Сидоров Сергей Сергеевич ', email: 'sidorov@sidor.sidor', phoneNumber: '+70000000002'},
]