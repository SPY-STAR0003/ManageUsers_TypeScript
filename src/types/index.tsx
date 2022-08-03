export type UserType = {
    id: string | number,
    name?: string,
    email?: string,
    role?: string,
    team?: string,
    status: "active" | "paused" | "vacation",
    age?: string,
    avatar?: string,
};
  