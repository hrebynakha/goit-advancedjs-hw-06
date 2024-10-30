/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }

interface ICompnent<T> {
  props: {
    title: T;
  };
}

class Component<T> implements ICompnent<T> {
  constructor(public props: T) {}
}

class Page<T> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
