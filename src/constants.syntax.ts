interface Syntax {
  label: string;
  value: string;
}

export const languages: Syntax[] = [
  {
    label: "Texto",
    value: "",
  },
  {
    label: "C#",
    value: "```csharp \n\n```",
  },
  {
    label: "JavaScript",
    value: "```javascript \n\n```",
  },
  {
    label: "TypeScript",
    value: "```typescript \n\n```",
  },
  {
    label: "Diff",
    value: "```diff\n\n```",
  },
];
