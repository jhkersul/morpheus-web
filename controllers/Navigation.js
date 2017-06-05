import history from '../src/history';

class Navigation {
  static navigateTo(path) {
    history.push(path);
    // Scroll to the top
    window.scrollTo(0, 0);
  }
}

export default Navigation;
