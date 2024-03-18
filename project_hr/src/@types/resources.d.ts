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
      rememberMe: 'Remember Me';
      dontHaveAcc: "Don't have account?";
    };
    signup: {
      firstName: 'First Name';
      lastName: 'Last Name';
      email: 'Email';
      password: 'Password';
      repeatPassword: 'Repeat Password';
      alreadyHaveAcc: 'Already have an account? Then click here!';
    };
    dashboard: {
      panel: 'Go to the module:';
      tabs: {
        home: 'Home';
        jobs: 'Jobs';
        meetings: 'Meetings';
        candidates: 'Candidates';
        blacklist: 'Blacklist';
        list: 'List';
      };
    };
    tableToolbar: {
      add: 'Add';
      select: 'Select';
      actions: 'Actions';
      actionTypes: {
        actions: 'Actions';
        delete: 'Delete';
      };
      availableRows: 'Available if marked rows';
      showRows: 'Show Rows';
      searchLabel: 'Search ...';
    };
    tableCandidates: {
      name: 'Name';
      position: 'Position';
      companyName: 'Company';
      createdAt: 'Created';
      updatedAt: 'Updated';
      shortDescription: 'Description';
      longDescription: 'Long description';
      '': '';
    };
    tableJobs: {
      companyName: 'Company';
      createdAt: 'Created';
      longDescription: 'Long description';
      shortDescription: 'Description';
      status: 'Status';
      title: 'Title';
      updatedAt: 'Updated';
    };
  };
}
