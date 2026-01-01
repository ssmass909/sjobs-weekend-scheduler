export type Weekday = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
export type TransportationInformation = {
  carRequired: boolean;
  carpoolBranchList: string[];
};

export type RequiredTrainerInfo = {
  weekDays: Weekday[];
  programs: string[];
  hours: number;
};
