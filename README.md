# getTweets
A simple express API server with caching, that returns a list of recent tweets according to query parameters. 

## Routes
- GET /api/ping
  * Response status code: 200; response body (JSON): { "success":true }

- GET /api/tweets
  * Query parameters:

    | Field | Type | Description | Default | Example |
    | ----- | ---- | ----------- | ------- | ------- |
    | names | String (required) | A list of twitter usernames separated by comma | N/A | elonmusk,jeffbezos |
    | sortBy | String (optional) | Criteria to sort the tweets by,
