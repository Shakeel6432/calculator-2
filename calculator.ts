import inquirer from "inquirer";

const calculator = async () => {
  const questions = [
    {
      type: 'input',
      name: 'num1',
      message: 'Enter the first number:',
    },
    {
      type: 'input',
      name: 'num2',
      message: 'Enter the second number:',
    },
    {
      type: 'list',
      name: 'operation',
      message: 'Select operation:',
      choices: [
        'Addition',
        'Subtraction',
        'Multiplication',
        'Division',
        'Square Root',
        'Power',
        'Sine',
        'Cosine',
        'Tangent',
        'Logarithm',
      ],
    },
  ];

  const answers = await inquirer.prompt(questions);

  const num1 = parseFloat(answers.num1);
  const num2 = parseFloat(answers.num2);

  switch (answers.operation) {
    case 'Addition':
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case 'Subtraction':
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case 'Multiplication':
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case 'Division':
      if (num2 !== 0) {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
      } else {
        console.log('Cannot divide by zero.');
      }
      break;
    case 'Square Root':
      console.log(`Square root of ${num1} = ${Math.sqrt(num1)}`);
      break;
    case 'Power':
      console.log(`Power${num1} ^ ${num2} = ${Math.pow(num1, num2)}`);
      break;
    case 'Sine':
      console.log(`Sine(${num1}) = ${Math.sin(num1)}`);
      break;
    case 'Cosine':
      console.log(`Cosine(${num1}) = ${Math.cos(num1)}`);
      break;
    case 'Tangent':
      console.log(`Tangent(${num1}) = ${Math.tan(num1)}`);
      break;
    case 'Logarithm':
      console.log(`Logarithm base ${num2} of ${num1} = ${Math.log(num1) / Math.log(num2)}`);
      break;
    default:
      console.log('Invalid operation');
      break;
  }
};

calculator();
