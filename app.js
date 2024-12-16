// Dont use DOMContentLoaded listener.
// you shouldnt do dom outside these functions

const { FileHandler } = window;

const fileHandler = new FileHandler();

export const extraMenu = [
  {
    label: "Option 1",
    callback(event, target) {},
  },
  {
    label: "Option 2",
    callback(event, target) {},
  },
  {
    label: "Option 3",
    callback(event, target) {},
  },
];

export function firstOpen() {}

export function everyOpen() {}

export const menuBarClass = ["lia-menubar", "small"];

export const menuBar = [
  {
    name: "File",
    data: [
      {
        label: "New",
        callback(event) {},
      },
      {
        label: "Open",
        async callback(event) {
          const file = await fileHandler.open(".txt");
          const data = await fileHandler.readFile(file, "text");
          //
        },
      },
      {
        label: "Download",
        async callback(event) {
          const text = "example";
          await fileHandler.save(text, "example.txt");
          //
        },
      },
    ],
  },
  {
    name: "Edit",
    data: [
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
    ],
  },
  {
    name: "Option",
    data: [
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
    ],
  },
  {
    name: "Option",
    data: [
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
    ],
  },
  {
    name: "Option",
    data: [
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
      {
        label: "Option",
        callback() {},
      },
    ],
  },
];
