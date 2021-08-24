
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('baby_names').del()
    .then(function () {
      // Inserts seed entries
      return knex('baby_names').insert([
        {name:'Olivia', ranking: '1', gender: 'f'},
        {name:'Emma', ranking: '2', gender: 'f'},
        {name:'Amelia', ranking: '3', gender: 'f'},
        {name:'Ava', ranking: '4', gender: 'f'},
        {name:'Sophia', ranking: '5', gender: 'f'},
        {name:'Charlotte', ranking: '6', gender: 'f'},
        {name:'Isabella', ranking: '7', gender: 'f'},
        {name:'Mia', ranking: '8', gender: 'f'},
        {name:'Luna', ranking: '9', gender: 'f'},
        {name:'Harper', ranking: '10', gender: 'f'},
        {name:'Liam', ranking: '1', gender: 'm'},
        {name:'Noah', ranking: '2', gender: 'm'},
        {name:'Oliver', ranking: '3', gender: 'm'},
        {name:'Elijah', ranking: '4', gender: 'm'},
        {name:'Lucas', ranking: '5', gender: 'm'},
        {name:'Mason', ranking: '6', gender: 'm'},
        {name:'Levi', ranking: '7', gender: 'm'},
        {name:'James', ranking: '8', gender: 'm'},
        {name:'Asher', ranking: '9', gender: 'm'},
        {name:'Mateo', ranking: '10', gender: 'm'}
      ]);
    });
};
