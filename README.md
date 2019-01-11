Issue 1.

Создать приложение по переводу значения температуры между градусами цельсия, фаренгейта и кельвина. 
Входящие параметры: Значение температуры вместе с указанием шкалы (цельсий, фаренгейт или кельвин), например: 26С, 299K, или 79F.

Выходные данные: Целые значения температур в JSON формате для всех шкал измерения, кроме указанной во входящих параметрах, например: {“K”: “299”, “F”: “79F”} 

Issue 3.

Вы участвуете в рыцарском поединке по стрельбе из лука. Поединок начинается с того, что оба соперника располагаются на расстоянии двадцати шагов друг от друга, и каждому дается только одна стрела и, соответственно, только один шанс на выстрел. 
В течение поединка соперники ходят по очереди, каждый ход участник может либо сделать шаг вперед, либо произвести выстрел. Чем ближе находятся соперники друг к другу, тем выше шанс попадания. При этом шанс попадания увеличивается линейно, начиная с определенного значения в начале поединка до 100% при полном сближении.  
Сложность состоит в том, что если вы сделаете выстрел и промахнетесь, соперник будет иметь право сделать необходимое количество шагов, подойти к вам вплотную, и выстрелить с гарантированным попаданием, что обеспечит ему победу.  
Создайте алгоритм, который, отталкиваясь от заданных значений шансов попадания для вас и соперника в начале поединка, будет определять номер шага когда вам нужно произвести выстрел для получения наиболее высоких шансов на победу. 
Входящие параметры: Значения шансов попадания в начале поединка (разные для вас и соперника, и оба в диапазоне от 0.1 до 0.3), а также номер участника, который ходит первым. 
Выходные данные: Наиболее оптимальный шаг для произведения выстрела (в диапазоне от 1 до 10).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
