import IToDoModel from './ToDoModel'

export default interface IListModel {
    id: number
    items : [IToDoModel]
}