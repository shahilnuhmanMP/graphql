let games = [
  { id: "1", title: "samp1", platform: ["p1"] },
  { id: "2", title: "samp2", platform: ["p1"] },
];

let authors = [{ id: "1", name: "author1", verified: true }];

let reviews = [
  {
    id: "1",
    ratig: 9,
    content: "review1",
    author_id: "1",
    game_id: "1",
  },
];
export default { games, authors, reviews };
