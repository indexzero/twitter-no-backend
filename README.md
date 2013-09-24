# twitter-no-backend

A simple example of how to use Twitter without any backend.

## Setting up your Twitter application.

1. Go to http://dev.twitter.com
2. Login to Twitter. **We recommend that you use a test account for the assignment**
3. Create a new application by navigating to https://dev.twitter.com/apps/new once logged in.
4. Click "Create a new application"
5. Enter the following information in the form:
  - Name: csw4170-[your uni]-a1 (where [your-uni] is your Columbia UNI)
  - Description: My application for csw4170 Assignment 1
  - Website: http://127.0.0.1
  - Callback URL: http://127.0.0.1/oauth_callback
6. Agree to the Terms, fill out the Captcha, and click "Create new Twitter application".
7. Go back to https://dev.twitter.com/apps and click on the app you just created.
8. Scroll to the bottom of the Application details page and click "Create my Access Token".
9. Click on the "OAuth Tool" tab. This is where you will find:
  - Consumer key
  - Consumer secret
  - Access token
  - Access token secret

## Setting up your Twitter application

Just open `public/index.html` in your browser (This has only been tested in Google Chrome).

```
  $ cd /path/to/twitter-no-backend/public
  $ open index.html
```

## Passing credentials to your Twitter app

Once your HTTP server is running you will need to pass your Twitter credentials to the client-side Javascript application. 

The following query parameters are valid:

* consumer_key
* consumer_secret
* access_token
* access_token_secret

e.g. 
```
file://twitter-no-backend/public/index.html?consumer_key=YOUR_KEY&consumer_secret=YOUR_SECRET&access_token=YOUR_TOKEN&access_token_secret=YOUR_TOKEN_SECRET
```

Navigating to that in your browser will demonstrate a **PROOF-OF-CONCEPT basic demo** using [codebird-js](https://github.com/jublonet/codebird-js). The code is located in [/public/js/main.js](/public/js/main.js).