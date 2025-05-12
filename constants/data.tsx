interface test {
  date: string;
  activities: {
    name: string;
    reps?: number;
    sets?: number;
    duration?: {
      hours: number;
      minutes: number;
    };
  }[];
}
export const testData = new Map<string, test>([
  [
    "05/11/2025",
    {
      date: "05/11/2025",
      activities: [
        {
          name: "test",
          reps: 10,
          sets: 4,
        },
        {
          name: "test",
          reps: 10,
          sets: 4,
        },
      ],
    },
  ],
  [
    "05/10/2025",
    {
      date: "05/10/2025",
      activities: [
        {
          name: "test",
          reps: 15,
          sets: 4,
          duration: {
            hours: 0,
            minutes: 30,
          },
        },
      ],
    },
  ],
  [
    "05/09/2025",
    {
      date: "05/09/2025",
      activities: [
        {
          name: "test dasdasdasdasdasdasdasdasdassddadsasdasaasdsd",
          duration: {
            hours: 0,
            minutes: 30,
          },
        },
      ],
    },
  ],
]);
