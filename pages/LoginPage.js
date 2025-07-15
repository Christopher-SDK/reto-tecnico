class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
    this.url = 'https://www.saucedemo.com/';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(user, pass) {
    await this.page.fill(this.usernameInput, user);
    await this.page.fill(this.passwordInput, pass);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}

module.exports = { LoginPage };
