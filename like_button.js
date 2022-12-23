'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {//declare constructor of the component
    super(props);   //TODO: what does this do ????
    this.state = { liked: false }; //declare the attributes associated to the component, here we only declare the boolean 'liked' and we set it's default value to 'false'
  }

  render() { //override the render method from the React.Component class in order to have it behave in the way we want it to
    if (this.state.liked) { //basically, if the button was clicked before, we don't render it and render the 'you liked this.' label
      return 'You liked this.';
    }

    return e( //otherwise, if the button wasn't clicked before, we render the element (the button)
      'button', //declare the name of the rendered element (the button)
      { onClick: () => this.setState({ liked: true }) }, //declare the associated events (we use onclick so that the element behaves as a button)
      'Like' //declare the label associated to the element
    );
  }
  
}

//const domContainer = document.querySelector('#like_button_container');//find the div element with the corresponding id
const root = ReactDOM.createRoot(document.querySelector('#like_button_container','#tasklist')); //TODO: what does this do ????
root.render(e(LikeButton));