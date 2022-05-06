# getTweets
A simple express API server with caching, that returns a list of recent tweets according to query parameters. <br>
Will retrieve 20 recent tweets per given twitter username excluding retweets. Requests to twitter api are made concurrently. Server deloyed to Heroku. Try the api with this url: https://get-tweets-api-server.herokuapp.com/

## Run Locally

1. Clone this repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Add Bearer token to .env file accroding to .env.example.
5. Start the server using the `npm start` command. The app will be served at <http://localhost:3000/>.
6. Make calls to routes shown below

## Routes
- GET /api/ping
  * Response status code: 200; response body: ``` { "success":true } ```

- GET /api/tweets/
  * Query parameters:

    | Field | Type | Description | Default | Example |
    | ----- | ---- | ----------- | ------- | ------- |
    | names | String (required) | A list of twitter usernames separated by comma | N/A | elonmusk,jeffbezos |
    | sortBy | String (optional) | Criteria to sort the tweets by. Acceptable values are: id, retweet_count, like_count, reply_count. | id | like_count |
    | direction | String (optional) | Direction for sorting. Acceptable values are: desc, asc | desc | desc
  
  * Error responses
    - ```{ "error":"names parameter is required" }``` indicates names parameter was not provided
    - ```{ "error":"sortBy parameter is invalid" }``` indicates invalid sortBy value
    - ```{ "error":"direction parameter is invalid" }``` indicates invalid direction value

## Dependencies
- Express
- Axios
- dotenv
- DevDependencies
  - jest
  - supertest