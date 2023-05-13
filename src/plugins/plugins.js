export const plugins = [
    {
        id: 'google_analytics',
        resolve: require('@botonic/plugin-google-analytics'),
        options: {
            trackingId: 'UA-XXXXXXXX-Y', // Your Google Analytics tracking ID
            getUserId: ({ session }) => session.user.extra_data.analyticsUserId, //Optional. Method that returns a unique user ID as string
            getUserTraits: ({ session }) => { userName: session.user.extra_data.analyticsUserName, 
                userEmail: session.user.extra_data.analyticsUserEmail }, //Optional. Method that returns an object with the user Traits
            automaticTracking: true, //Optional. Indicates if an automatic tracking will be executed on every user interaction (true by default)
            getEventFields: () => ({ category: 'bot', action: 'user_interaction' }) //Optional. Set custom event fields to track if automatic tracking is enabled
        }
    }
]