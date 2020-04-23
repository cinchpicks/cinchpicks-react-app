const rules = {
    visitor: {
      static: ["no-auth-home-page:visit"]
    },
    writer: {
      static: [
        "auth-home-page:visit",
        "weekly-results-page:visit",
        "admin-get-users-list:visit"
      ]
    },
    admin: {
      static: [
        "admin:edit",
        "weekly-results:view",
        "auth-home-page:visit",
        "weekly-results-page:visit",
        "admin-get-users-list:visit"
      ]
    }
  };
  
  export default rules;