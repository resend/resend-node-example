# Resend with Node.js

[![](https://badgen.net/badge/Run%20with%20/VS%20Code/5B3ADF?icon=https://runme.dev/img/logo.svg)](https://runme.dev/api/runme?repository=git@github.com:resendlabs/resend-node-example.git)

This example shows how to use Resend with [Node.js](https://nodejs.org).

## Prerequisites

To get the most out of this guide, you’ll need to:

* [Create an API key](https://resend.com/api-keys)
* [Verify your domain](https://resend.com/domains)

## Instructions

1. Install dependencies
2. Set Resend API Key
3. Send an email!

## 1. Install dependencies

Using npm

```sh { name=install-npm }
npm install
```

Using yarn

```sh { name=install-yarn }
yarn
```

## 2. Set API Key

```sh { name=set-api-key interactive=false }
export RESEND_API_KEY=Resend API Key
echo 'Api Key Added'
```

## 2. Send an email

```sh { name=send-email }
npm run dev
```

Open the dashboard logs to visualize your email

```sh { name=open-dashboard background=false interactive=false }
open https://resend.com/logs
```

## License

MIT License