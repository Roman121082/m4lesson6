'use strict';

const filter = (allStudents, failedStudents) => {
  const passedStudents = allStudents.filter(item => !failedStudents.includes(item));

  return passedStudents.join(', ');
};

console.log(`Список сдавших экзамен: ${filter(['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'], ['Сидоров', 'Смирнов', 'Попов'])}`);