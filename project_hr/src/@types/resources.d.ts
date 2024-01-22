export interface Resources {
  ns1: {
    home: {
      title: 'Welcome to our Job Portal. Explore exciting career opportunities and find your dream job';
      signin: 'Sign in';
      signup: 'Sign up';
      footer_text: 'We are looking for specialists in those technologies:';
    };
    signin: {
      email: 'email';
      password: 'password';
      rememberMe: 'RememberMe';
      dontHaveAcc: "Don't have account?";
    };
    signup: {
      firstName: 'First Name';
      lastName: 'Last Name';
      email: 'Email';
      password: 'Password';
      repeatPassword: 'Repeat Password';
      alreadyHaveAcc: 'Already have an account? Then click here:';
    };
    dashboard: {
      tabs: {
        home: 'Home';
        jobs: 'Jobs';
        calendar: 'Calendar';
        candidates: 'Candidates';
        blacklist: 'Candidates Blacklist';
      };
      content: {
        openPositions: 'Open Positions';
        candidates: 'Candidates';
      };
    };
  };
}
