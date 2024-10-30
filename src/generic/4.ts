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

interface IComponent {
  title: string;
}

class Component<IComponent>{
  constructor(public props: IComponent) { }
  getInf() {
    console.log("component", this.props)
  }
}

class Page extends Component<IComponent> {
  pageInfo() {
    console.log(this.props.title);
  }
}
// const page = new Page({ title: "Title" })
// page.pageInfo(); // Title
export {};
