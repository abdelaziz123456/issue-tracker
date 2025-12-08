import { IssueStatusEnum } from "./types";

export const mappedIssues = {
  [IssueStatusEnum.TODO]: {
    color: "orange",
    text: "To Do",
  },
  [IssueStatusEnum.IN_PROGRESS]: {
    color: "blue",
    text: "In Progress",
  },
  [IssueStatusEnum.DONE]: {
    color: "green",
    text: "Done",
  },
};
