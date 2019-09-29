
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('mytopnine')
    .truncate()
    .then(function () {
      return knex('mytopnine').insert([
        { UserName: 'Sam', Rank: 1, TopNineItem: 'Banana', Category: 'Fruit' },
        { UserName: 'Sam', Rank: 2, TopNineItem: 'Orange', Category: 'Fruit' },
        { UserName: 'Sam', Rank: 3, TopNineItem: 'Pineapple', Category: 'Fruit' },
        { UserName: 'Sam', Rank: 4, TopNineItem: 'Mango', Category: 'Fruit' },
        { UserName: 'Sam', Rank: 5, TopNineItem: 'Avocado', Category: 'Fruit' },
        { UserName: 'Sam', Rank: 6, TopNineItem: 'Coconut', Category: 'Fruit' },
        { UserName: 'Sam', Rank: 7, TopNineItem: 'Blue Berry', Category: 'Fruit' },
        { UserName: 'Sam', Rank: 8, TopNineItem: 'Dragon Fruit', Category: 'Fruit' },
        { UserName: 'Sam', Rank: 9, TopNineItem: 'Strawberry', Category: 'Fruit' },
        { UserName: 'Mary', Rank: 1, TopNineItem: 'Lion', Category: 'Animal' },
        { UserName: 'Mary', Rank: 2, TopNineItem: 'Elephant', Category: 'Animal' },
        { UserName: 'Mary', Rank: 3, TopNineItem: 'Panther', Category: 'Animal' },
        { UserName: 'Mary', Rank: 4, TopNineItem: 'Tiger', Category: 'Animal' },
        { UserName: 'Mary', Rank: 5, TopNineItem: 'Rabbit', Category: 'Animal' },
        { UserName: 'Mary', Rank: 6, TopNineItem: 'Fox', Category: 'Animal' },
        { UserName: 'Mary', Rank: 7, TopNineItem: 'Wolf', Category: 'Animal' },
        { UserName: 'Mary', Rank: 8, TopNineItem: 'Giraffe', Category: 'Animal' },
        { UserName: 'Mary', Rank: 9, TopNineItem: 'Llama', Category: 'Animal' }
      ]);
    });
};
