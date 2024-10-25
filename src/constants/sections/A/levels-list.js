import SECTIONS from "../../enums/sections";

const levelsListA = [
  {
    title: "Level 1",
    id: 1,
    section: SECTIONS.A,
    colors: ['#87dff5', '#f587ef', '#f5f387', '#f58792'],
    size: {
      height: 3,
      width: 3
    },
    disabled: false, // disable higher levels' button based off progress from local storage
    complete: false, // fill in with local storage info and change color of level button
    inProgress: false // flag for changing level btn color & tell to check for existing array in storage
  },
  {
    title: "Level 2",
    id: 2,
    section: SECTIONS.A,
    colors: ['#f4ff29', '#ff051e', '#655ee6', '#47ffd7'],
    size: {
      height: 5,
      width: 5
    },
    disabled: false
  },
  {
    title: "Level 3",
    id: 3,
    section: SECTIONS.A,
    colors: ['#03fc1c', '#03f8fc', '#fc2403', '#c603fc'],
    size: {
      height: 5,
      width: 7
    },
    disabled: false
  },
  {
    title: "Level 4",
    id: 4,
    section: SECTIONS.A,
    colors: ['#87dff5', '#f587ef', '#f5f387', '#f58792'],
    size: {
      height: 10,
      width: 10
    },
    disabled: false
  },
  {
    title: "Level 5",
    id: 5,
    section: SECTIONS.A,
    colors: ['#d465fc', '#6590fc', '#a600e3', '#1304bf'],
    size: {
      height: 5,
      width: 8
    },
    disabled: false
  },
  {
    title: "Level 6",
    id: 6,
    section: SECTIONS.A,
    disabled: true
  },
  {
    title: "Level 7",
    id: 7,
    section: SECTIONS.A,
    disabled: true
  },
  {
    title: "Level 8",
    id: 8,
    section: SECTIONS.A,
    disabled: true
  },
  {
    title: "Level 9",
    id: 9,
    section: SECTIONS.A,
    disabled: true
  },
  {
    title: "Level 10",
    id: 10,
    section: SECTIONS.A,
    disabled: true
  }
];

export default levelsListA;
