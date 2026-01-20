export interface Issue {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  status: IssueStatusEnum;
}

export enum IssueStatusEnum {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
export interface IFormInput {
  title: string;
  description: string;
}

export enum RoutesEnum {
  HOME = "/",
  ISSUES = "/issues",
  NEW_ISSUE = "/issues/new",
  LOGIN = "/login",
}
