export namespace PeopleProvider {
  export enum Queries {
    PEOPLE_FIND_ONE_WITH_ID = "PEOPLE_GET_ID",
    PEOPLE_FIND_MANY_WITH_TERMS = "PEOPLE_GET_TERMS",
    PEOPLE_COUNT = "PEOPLE_COUNT"
  }
  export enum Daos {}
  export enum Commands {
    PEOPLE_CREATE = "PEOPLE_CREATE"
  }
  export enum Repository {
    PEOPLES = "PEOPLES"
  }
}
